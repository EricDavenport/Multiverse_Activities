//
//  WorkoutListViewController.m
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import "WorkoutListViewController.h"
#import "Workout.h"
#import "FirebaseDB.h"
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
;

//- (void)loadUserWorkouts{
//  FIRCollectionReference * workoutRef = [self.db collectionWithPath:@"workouts"];
//  [workoutRef getDocumentsWithCompletion:^(FIRQuerySnapshot * _Nullable snapshot, NSError * _Nullable error) {
//    if (error != nil) {
//      NSLog(@"Error getting documents: %@", error);
//    } else {
//      for (FIRDocumentSnapshot * document in snapshot.documents) {
//        Workout * work = [[Workout alloc] initWithDict:document.data];
//
//        NSLog(@"workout loaded: %@", work.type);
//      }
//    }
//  }];
//}

//- (void)snapListener{
//  [[[self.db collectionWithPath:@"workouts"] queryWhereField:@"UserId" isEqualTo:uidwl] addSnapshotListener:^(FIRQuerySnapshot * _Nullable snapshot, NSError * _Nullable error) {
//    if (snapshot == nil) {
//      NSLog(@"Error fetching documents: %@", error);
//      return;
//    } else {
//      for (FIRDocumentSnapshot * wkts in snapshot.documents) {
//        Workout * work = [[Workout alloc] initWithDict:wkts.data];
////        [wks addObject:work];
//        NSLog(@"test: %@\n", wks);
//      }
//      NSLog(@"all user workouts: %@", wks);
//    }
//  }];
//  dispatch_async(dispatch_get_main_queue(), ^{
//    [self.tableView reloadData];
//  });
//}

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

/*
 #pragma mark - Navigation
 
 // In a storyboard-based application, you will often want to do a little preparation before navigation
 - (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
 // Get the new view controller using [segue destinationViewController].
 // Pass the selected object to the new view controller.
 }
 */

#pragma mark - UITableViewDataSource

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  return self.wks.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
  UITableViewCell * cell = [tableView dequeueReusableCellWithIdentifier:@"workoutCell" forIndexPath:indexPath];
  Workout * worksCell = self.wks[indexPath.row];
  cell.textLabel.text = worksCell.type;
  return cell;
}
@end
