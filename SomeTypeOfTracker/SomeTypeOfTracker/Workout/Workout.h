//
//  Workout.h
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface Workout : NSObject

@property NSString * type;
@property NSString * calories;
@property NSDate * date;
@property NSString * time;


- (instancetype)initWithDict: (NSDictionary *)dict;

@end

NS_ASSUME_NONNULL_END
