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
@import Firebase;


@interface AddNewWorkoutViewController ()
@property (weak, nonatomic) IBOutlet UIPickerView *typePicker;
@property (weak, nonatomic) IBOutlet UITextField *calorieTextField;
@property (weak, nonatomic) IBOutlet UIDatePicker *datePicker;
@property (weak, nonatomic) IBOutlet UITextField *timeField;

@property (weak, nonatomic, readwrite) FIRFirestore *db;
@property Workout *current;
@end

@implementation AddNewWorkoutViewController

NSString * uid;

- (void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view.
  self.db = [FIRFirestore firestore];
  uid = [FIRAuth auth].currentUser.uid;
  if (_current == nil) {
    _current = [[Workout alloc] init];
    _current.uid = uid;
  }

  types = @[@"Core", @"Cycle", @"HIIT", @"Boxing", @"Run", @"Strength", @"Push-Ups", @"Yoga"];

  self.typePicker.delegate = self;
  self.typePicker.dataSource = self;
}

-(void)createWorkoutTemplate {
  if (selectedType != nil) {
    _current.type = selectedType;
  }
  if (_current.calories != nil) {
    _current.calories = _calorieTextField.text;
  }
  if (_current.date != nil) {
    _current.date = _datePicker.date;
  }
  if (_current.time != nil) {
    _current.time = _timeField.text;
  }
  if (_current.uid != nil) {
    _current.uid = uid;
  }
  NSLog(@"type: %@ -- date: %@ -- time: %@ -- uid: %@ -- cal: %@", _current.type, _current.date, _current.time, _current.uid, _current.calories);
}

- (void)addWorkout {
  [self createWorkoutTemplate];

  __block FIRDocumentReference *ref =
  [[self.db collectionWithPath:@"workouts"] addDocumentWithData:@{
    @"Type":_current.type,
    @"Calories":_current.calories,
    @"Date":_current.date,
    @"Time":_current.time,
    @"UserId":_current.uid
  } completion:^(NSError * _Nullable error) {
    if (error != nil) {
      NSLog(@"Error adding document: %@", error);
    } else {
      NSLog(@"Document added with ID: %@", ref.documentID);
    }
  }];
}

- (BOOL)validEntry{
  [self createWorkoutTemplate];
  if (_current.type == nil || _current.calories == nil || _current.date == nil || _current.type == nil || _current.uid == nil) {
    return NO;
  }
  return YES;
}


- (IBAction)saveButton:(id)sender {
  // add add workout function to the completion block
//  if selectedType
  if ([self validEntry]){
    [self addWorkout];
    [self dismissViewControllerAnimated:YES completion:nil];
  } else {
    UIAlertController * alert = [UIAlertController alertControllerWithTitle:@"Fields Missing" message:@"All fields must be changed" preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction * defaultAction = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:^(UIAlertAction * action) {}];

    [alert addAction:defaultAction];
    [self presentViewController:alert animated:YES completion:nil];
  }


}

- (IBAction)cancelButton:(id)sender {
  [self dismissViewControllerAnimated:YES completion:nil];
  [self validEntry];
}


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
