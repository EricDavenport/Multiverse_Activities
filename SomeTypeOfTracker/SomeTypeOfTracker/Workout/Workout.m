//
//  Workout.m
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import "Workout.h"

@import FirebaseFirestore;
@import FirebaseCore;
@import Firebase;

@implementation Workout

//@property (nonatomic, readwrite) FIRFirestore *db;

- (instancetype)initWithDict:(NSDictionary *)dict {
  if (self = [super init]) {
    self.type = dict[@"Type"];
    self.calories = dict[@"Talories"];
    self.date = dict[@"Date"];
    self.time = dict[@"Time"];
    self.uid = dict[@"UserId"];
  }
  return self;
}



//-(void)addNewWorkout

//- (void)addNewWorkout(NSString *type) {

//}




@end
