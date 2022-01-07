//
//  ViewController.m
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/1/22.
//

#import "ViewController.h"
#import "WorkoutListViewController.h"
#import "AddNewWorkoutViewController.h"

@import Firebase;

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UITextField *emailField;
@property (weak, nonatomic) IBOutlet UITextField *passwordField;

@end

@implementation ViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view.
}

- (void)userLoggedIn {
  //  [self navigationController];
  [self performSegueWithIdentifier:@"WorkoutNavi" sender:self];
}

- (IBAction)newUserButton:(id)sender {
  [[FIRAuth auth] createUserWithEmail:_emailField.text
                             password:_passwordField.text
                           completion:^(FIRAuthDataResult * _Nullable authResult, NSError * _Nullable error) {
    if (error != nil) {
      NSLog(@"Error creating a new user %@", error);
    } else {
      NSLog(@"New User created %@);", authResult);
      [self userLoggedIn];

    }
  }
  ];
}
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
  if([segue.identifier  isEqual: @"WorkoutNavi"]) {
    AddNewWorkoutViewController * vc = [segue destinationViewController];
    //    vc.uiiid = @"";
  }
}

- (IBAction)signInButton:(id)sender {
  [[FIRAuth auth] signInWithEmail:self->_emailField.text
                         password:self->_passwordField.text
                       completion:^(FIRAuthDataResult * _Nullable authResult, NSError * _Nullable error) {
    if (error != nil) {
      NSLog(@"Error signing user in -> %@", error);
    } else {
      NSLog(@"User ssigned in);");
      [self userLoggedIn];
    }
  }
  ];
}

@end
