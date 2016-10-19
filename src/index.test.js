import { expect } from 'chai';

import { GroupOfLearners, Teacher, Content, Course } from './index';

let theProgrammingTeacher, theGroupOfLearners, programming, theCourse;

describe('the (programming) teacher', () => {

  beforeEach('modelling a learning experience', () => {
    theGroupOfLearners = new GroupOfLearners(20);
    theProgrammingTeacher = new Teacher('Israel');
    programming = new Content('programming');
    theCourse = new Course(theGroupOfLearners, theProgrammingTeacher, programming);
  });

  it('should focus on the learner, not the content', () => {

    expect(theProgrammingTeacher.action.bind(theProgrammingTeacher))
      .to.increase(theProgrammingTeacher.focus, 'learner');
    expect(theProgrammingTeacher.action.bind(theProgrammingTeacher))
      .to.decrease(theProgrammingTeacher.focus, 'content');

    expect(theProgrammingTeacher.exploreGroupNeedsBeforeTheCourse)
      .to.be.true;
    expect(theProgrammingTeacher.adaptContentToTheGroup)
      .to.be.true;
    expect(theProgrammingTeacher.defineLearningObjectives)
      .to.be.true;

    expect(theProgrammingTeacher.collectFeedback)
      .to.exist;

  });

  const TWENTY_PERCENT = 20;
  const FIFTY_PERCENT = 50;

  it('should force a methodology shift', () => {

    expect(theProgrammingTeacher.talkingTime)
      .to.be.at.most(TWENTY_PERCENT);
    expect(theProgrammingTeacher.methodology)
      .to.include('practical exercises');
    expect(theProgrammingTeacher.practiceTime)
      .to.be.at.least(FIFTY_PERCENT);

    expect(theProgrammingTeacher.attitude)
      .to.be.equal('humble');
    expect(theProgrammingTeacher.attitude)
      .not.to.be.equal('fear to make mistakes');

    expect(theProgrammingTeacher.methodology)
      .to.include('flipped classroom');
    expect(theProgrammingTeacher.methodology)
      .to.include('project based learning');

  });

  it('should change his/her role in the learning process', () => {

    expect(theProgrammingTeacher.role)
      .to.not.include('sage on the stage');
    expect(theProgrammingTeacher.role)
      .to.include('guide on the side');

    expect(theCourse.materials)
      .to.be.equal('commodity');

    expect(theProgrammingTeacher.answer)
      .to.be.equal('questions');

    expect(theProgrammingTeacher.actions)
      .to.include('mentoring');

  });

  it('should empower the role of the peers in the learning process', () => {

    expect(theProgrammingTeacher.action.bind(theProgrammingTeacher))
      .to.change(theGroupOfLearners, 'role');

    expect(theProgrammingTeacher.activities)
      .to.include('group');

    const groupActivities = theProgrammingTeacher.groupActivities;
    expect(groupActivities)
      .to.include('group changes');
    expect(groupActivities)
      .to.include('groups created by the teacher');

    expect(theProgrammingTeacher.doGroupActivities.bind(theProgrammingTeacher))
      .to.increase(theGroupOfLearners, 'motivation');

  });

  it('should assess learners in order to improve learning', () => {

    expect(theProgrammingTeacher.doAssessment.bind(theProgrammingTeacher))
      .to.change(theGroupOfLearners, 'awareness');

    expect(theProgrammingTeacher.assessment.objective)
      .to.equal('learn');
    expect(theProgrammingTeacher.assessment.objective)
      .not.to.equal('a mark');

    expect(theProgrammingTeacher.assessment.feedback)
      .to.equal('quick');

    expect(theProgrammingTeacher.assessment.result)
      .to.change(theCourse, 'content');

    expect(theProgrammingTeacher.assessment.preparation)
      .to.include('learning objectives');

  });

  it('should prioritize motivating learners over teaching them', () => {

    const motivation = theProgrammingTeacher.priorities['motivate learners'];
    const teaching = theProgrammingTeacher.priorities['teaching'];
    expect(motivation)
      .to.be.above(teaching);

    expect(theProgrammingTeacher.role)
      .to.include('community manager');

    expect(theGroupOfLearners.feelings)
      .to.include('main character');
    expect(theProgrammingTeacher.activityTopics)
      .to.include('learners interests');
    expect(theProgrammingTeacher.preparation)
      .to.include('little details');

    expect(theProgrammingTeacher.actions)
      .to.include('suprise learners');

  });
});
