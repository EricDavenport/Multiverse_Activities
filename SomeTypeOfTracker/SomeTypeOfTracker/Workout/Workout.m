//
//  Workout.m
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import "Workout.h"

@implementation Workout

- (instancetype)initWithDict:(NSDictionary *)dict {
  if (self = [super init]) {
    self.type = dict[@"type"];
    self.calories = dict[@"calories"];
    self.date = dict[@"date"];
    self.time = dict[@"time"];
  }
  return self;
}

@end
