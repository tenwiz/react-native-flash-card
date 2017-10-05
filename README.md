[Demos](https://github.com/Martian2Lee/Portfolio)

# Mobile Flashcards

## Test

The application was tested on iPhone 7 Plus and Samsung Galaxy S6.

## App Usage

In Deck Main or Deck Detail:

* Swiping deck or card for edit or delete.

In Card Quiz:
* Tapping cards for the answer.
* Swiping cards for right or wrong.

## Run

* Make sure `yarn` is installed
* `git clone https://github.com/Martian2Lee/Mobile-Flashcards.git` 
* `cd Mobile-Flashcards/`
* `yarn install`
* `yarn start`
* Follow instructions to open Android or iOS simulator on PC or phone.

Reply to requirement:
1) Since in Card Quiz you can swipe cards for right or wrong, `correct` and `incorrect` buttons are uncessary.
2) After swiping, the next question car IS displayed automatically.
3) Once the quiz is completed, the user IS shown the score of correct answers. I have add the logic of retaking wrong quizs, and this functionality is more complex than the rubric, besides this, after retaking all wrong quizs, I don't think users want/need to restart the quiz immediately.