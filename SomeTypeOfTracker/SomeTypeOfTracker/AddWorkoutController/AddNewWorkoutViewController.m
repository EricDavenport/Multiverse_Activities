//
//  AddNewWorkoutViewController.m
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import "AddNewWorkoutViewController.h"
@import FirebaseFirestore;
@import FirebaseCore;



@interface AddNewWorkoutViewController ()
@property (weak, nonatomic) IBOutlet UIPickerView *typePicker;
@property (weak, nonatomic) IBOutlet UITextField *calorieTextField;
@property (weak, nonatomic) IBOutlet UIDatePicker *datePicker;
@property (weak, nonatomic) IBOutlet UITextField *timeField;

@property (nonatomic, readwrite) FIRFirestore *db;

@end

@implementation AddNewWorkoutViewController

//(_workoutTypeDropDown) changesSelectionAsPrimaryAction = YES;

- (void)setUpDropDown {
    
}


- (void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view.
  self.db = [FIRFirestore firestore];
  self.setUpDropDown;
}

- (void)addNewWorkout {
    __block FIRDocumentReference *ref =
    [[self.db collectionWithPath:@"workouts"] addDocumentWithData:@{
      @"Type": _typePicker.,
      @"Calories": _calorieTextField.text,
      @"Date":_datePicker.date,
      @"Time":_timeField.text,
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

@end
