//
//  WorkoutListViewController.m
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import "WorkoutListViewController.h"
#import "Workout.h"
#import "FirebaseDB.h"
#import "WorkoutCell.h"
#import "DetailViewController.h"
@import Firebase;
@import FirebaseFirestore;


@interface WorkoutListViewController ()

@property (weak, nonatomic) IBOutlet UITableView *tableView;
@property (strong, nonatomic) FIRDatabaseReference *ref;
@property (weak, nonatomic, readwrite) FIRFirestore *db;
@property FirebaseDB * fbDB;
@property NSArray * wks;
@property NSString * uiiid;

@end

@implementation WorkoutListViewController 
NSString * uidwl;
@synthesize tableView;

- (void)viewDidLoad {
  [super viewDidLoad];
  [self navigationController].navigationBarHidden = NO;
//  [self navigationController]
  self.db = [FIRFirestore firestore];
  self.ref = [[FIRDatabase database] reference];
  uidwl = [FIRAuth auth].currentUser.uid;
  self.tableView.dataSource = self;
  //  [self add]
  if (_fbDB == nil) {
    _fbDB = [[FirebaseDB alloc] init];
  }

  [self fetchWorkoouts];
  //  [self loadUserWorkouts];
  //  [self snapListener];
}

- (void)fetchWorkoouts {
  [self.fbDB loadUserWorkoutsFB:^(NSError * error, NSArray * works) {
    self.wks = works;

    [self.tableView reloadData];
  }];
}


- (IBAction)signOutButton:(id)sender {
  //    sign user out with the following function after confirming user exist
  NSError *signOutError;
  BOOL status = [[FIRAuth auth] signOut:&signOutError];
  if (!status) {
    NSLog(@"Error signing out: %@", signOutError);
    return;
  }
  [self dismissViewControllerAnimated:YES completion:nil];
}
- (IBAction)addWorkoutButton:(id)sender {
  [self performSegueWithIdentifier:@"AddWorkSegue" sender:self];
}


#pragma mark - Navigation

- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
  if([segue.identifier  isEqual: @"DetailNavi"]) {
    NSIndexPath * indexPath = [self.tableView indexPathForSelectedRow];
    DetailViewController * vc = [segue destinationViewController];
//    vc.type = [_wks objectAtIndex:indexPath.row];
  }
}


#pragma mark - UITableViewDataSource

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  return self.wks.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
  UITableViewCell * cell = [tableView dequeueReusableCellWithIdentifier:@"workoutCell" forIndexPath:indexPath];
  if (cell == nil) {
//    cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"workoutCell"]];
  }
  Workout * worksCell = self.wks[indexPath.row];
  cell.textLabel.text = worksCell.type;
  cell.imageView.image = [UIImage imageNamed:worksCell.type];
//  cell.detailTextLabel.text = worksCell.calories;
//  [cell contentConfiguration]
  return cell;
}
@end
