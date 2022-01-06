//
//  FirebaseDB.m
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/3/22.
//

#import "FirebaseDB.h"
#import "Workout.h"
@import FirebaseFirestore;
@import FirebaseCore;
@import Firebase;

@implementation FirebaseDB


- (void)loadUserWorkoutsFB:(void (^)(NSError *, NSArray *)) completion {
  FIRFirestore * db = [FIRFirestore firestore];
  NSString * uid = [FIRAuth auth].currentUser.uid;
  [[[db collectionWithPath:@"workouts"] queryWhereField:@"UserId" isEqualTo:uid] getDocumentsWithCompletion:^(FIRQuerySnapshot * _Nullable snapshot, NSError * _Nullable error) {
    if (error != nil) {
      completion(error, nil);
      NSLog(@"Error getting documents: %@", error);
    } else {
      NSMutableArray * results = [[NSMutableArray alloc] init];

      for (FIRDocumentSnapshot * document in snapshot.documents) {
        Workout * work = [[Workout alloc] initWithDict:document.data];
        [results addObject:work];
        NSLog(@"workout loaded: %@", work.type);
      }

      dispatch_async(dispatch_get_main_queue(), ^{
        completion(nil, results);
      });
    }
  }];

}

@end
