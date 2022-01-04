//
//  AddNewWorkoutViewController.h
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface AddNewWorkoutViewController : UIViewController <UIPickerViewDelegate, UIPickerViewDataSource>
{
  NSArray * types;
  NSString * selectedType;
}

//- (void)addNewWorkout;

@end

NS_ASSUME_NONNULL_END
