//
//  WorkoutListViewController.h
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface WorkoutListViewController : UIViewController <UITableViewDelegate, UITableViewDataSource>
{
  NSMutableArray * workouts;
}


@end

NS_ASSUME_NONNULL_END
