//
//  DetailViewController.m
//  SomeTypeOfTracker
//
//  Created by Eric Davenport on 1/7/22.
//

#import "DetailViewController.h"
@import UIKit;

@interface DetailViewController ()

@property (weak, nonatomic) IBOutlet UILabel *typeLabel;
@property (weak, nonatomic) IBOutlet UILabel *caloriesLabel;
@property (weak, nonatomic) IBOutlet UILabel *dateLabel;
@property (weak, nonatomic) IBOutlet UIImageView *typeImageView;

//@property (nonatomic, strong) NSString * type;

@end

@implementation DetailViewController

//@synthesize type;

- (void)viewDidLoad {
  [super viewDidLoad];
  self.view.backgroundColor = [UIColor clearColor];
//  _typeLabel.text = type;
}



/*
 #pragma mark - Navigation

 // In a storyboard-based application, you will often want to do a little preparation before navigation
 - (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
 // Get the new view controller using [segue destinationViewController].
 // Pass the selected object to the new view controller.
 }
 */

@end
