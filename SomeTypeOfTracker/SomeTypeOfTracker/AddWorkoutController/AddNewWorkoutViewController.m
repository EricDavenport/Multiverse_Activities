//
//  AddNewWorkoutViewController.m
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import "AddNewWorkoutViewController.h"
#import "Workout.h"
@import FirebaseFirestore;
@import FirebaseCore;



@interface AddNewWorkoutViewController ()
@property (weak, nonatomic) IBOutlet UIPickerView *typePicker;
@property (weak, nonatomic) IBOutlet UITextField *calorieTextField;
@property (weak, nonatomic) IBOutlet UIDatePicker *datePicker;
@property (weak, nonatomic) IBOutlet UITextField *timeField;

@property (weak, nonatomic, readwrite) FIRFirestore *db;
@property Workout *current;
@end

@implementation AddNewWorkoutViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.db = [FIRFirestore firestore];
    if (_current == nil) {
      _current =[[Workout alloc] init];
    }
    
    types = @[@"Core", @"Cycle", @"HIIT", @"Pilates", @"Run", @"Strength", @"Walk", @"Yoga"];
    
    self.typePicker.delegate = self;
    self.typePicker.dataSource = self;
}

- (void)addWorkout {
  _current.type = selectedType;
  _current.calories = _calorieTextField.text;
  _current.date = _datePicker.date;
  _current.time = _timeField.text;
  
    __block FIRDocumentReference *ref =
      [[self.db collectionWithPath:@"workouts"] addDocumentWithData:@{
        @"Type": _current.type,
        @"Calories": _current.calories,
        @"Date":_current.date,
        @"Time":_current.time,
      } completion:^(NSError * _Nullable error) {
        if (error != nil) {
          NSLog(@"Error adding document: %@", error);
      } else {
          NSLog(@"Document added with ID: %@", ref.documentID);
      }
    }];
}




- (IBAction)saveButton:(id)sender {
  // add add workout function to the completion block
  [self addWorkout];
  [self dismissViewControllerAnimated:YES completion:nil];
 
  //  [self workoutTypeDropDown:changesSelectionAsPrimaryAction:YES];
}



/*
 #pragma mark - Navigation
 
 // In a storyboard-based application, you will often want to do a little preparation before navigation
 - (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
 // Get the new view controller using [segue destinationViewController].
 // Pass the selected object to the new view controller.
 }
 */

#pragma mark - UIPickerView Set up




- (NSInteger)numberOfComponentsInPickerView:(nonnull UIPickerView *)pickerView {
    return 1;
}

- (NSInteger)pickerView:(nonnull UIPickerView *)pickerView numberOfRowsInComponent:(NSInteger)component {
    return types.count;
}

- (NSString *)pickerView:(UIPickerView *)pickerView titleForRow:(NSInteger)row forComponent:(NSInteger)component {
    return types[row];
}

- (void)pickerView:(UIPickerView *)pickerView didSelectRow:(NSInteger)row inComponent:(NSInteger)component{
  selectedType = types[row];
}


@end
