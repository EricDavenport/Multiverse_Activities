//
//  WorkoutCell.m
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/7/22.
//

#import "WorkoutCell.h"
#import "Workout.h"

@interface WorkoutCell()

@property (weak, nonatomic) IBOutlet UIImageView *typeImageView;
@property (weak, nonatomic) IBOutlet UILabel *typeLabel;

@property (weak, nonatomic) IBOutlet UILabel *dateLabel;
@property (weak, nonatomic) IBOutlet UILabel *calorieLabel;


@end

@implementation WorkoutCell

- (void)configCell:(Workout *)curr {
  NSDateFormatter * format = [[NSDateFormatter alloc] init];
  [format setDateFormat:@"MM-dd"];
  _typeImageView.image = [UIImage imageNamed:curr.type];
  _typeLabel.text = curr.type;
  _dateLabel.text = [format stringFromDate:curr.date];
  _calorieLabel.text = curr.calories;
}

- (void)awakeFromNib {
    [super awakeFromNib];
    // Initialization code
}

- (void)setSelected:(BOOL)selected animated:(BOOL)animated {
    [super setSelected:selected animated:animated];

    // Configure the view for the selected state
}

@end
