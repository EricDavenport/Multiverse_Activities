//
//  FirebaseDB.h
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface FirebaseDB : NSObject

- (void)loadUserWorkoutsFB: (void (^) (NSError *, NSArray *)) completion;

@end

NS_ASSUME_NONNULL_END
