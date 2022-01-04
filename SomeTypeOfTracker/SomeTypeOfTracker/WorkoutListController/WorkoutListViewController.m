//
//  WorkoutListViewController.m
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import "WorkoutListViewController.h"
@import Firebase;

@interface WorkoutListViewController ()

@property (weak, nonatomic) IBOutlet UITableView *tableView;

@end

@implementation WorkoutListViewController 
//NSString *useremail = FIRUser.
- (void)signUserOut{
    NSError *signOutError;
    BOOL status = [[FIRAuth auth] signOut:&signOutError];
    if (!status) {
      NSLog(@"Error signing out: %@", signOutError);
      //      [self ];
      return;
    }
}

- (void)viewDidLoad {
    [super viewDidLoad];
    //  NSLog(@"user %@", FIRUser);
    self.tableView.dataSource = self;
    
    // Do any additional setup after loading the view.
}


- (IBAction)signOutButton:(id)sender {
    //    sign user out with the following function after confirming user exist
//    NSError *signOutError;
//    BOOL status = [[FIRAuth auth] signOut:&signOutError];
//    if (!status) {
//        NSLog(@"Error signing out: %@", signOutError);
//        return;
//    }
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
  return 5;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"workoutCell" forIndexPath:indexPath];
    //  Movie *movie = self.movies[indexPath.row];
    cell.textLabel.text = @"New Workout";
    return cell;
}
@end
