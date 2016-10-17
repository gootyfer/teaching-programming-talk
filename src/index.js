class Person{
  constructor(name){
    this.name = name;
  }
}

class Learner extends Person{
  constructor(name){
    super(name);
    this.needs = 'UNIQUE_VALUE';
  }
}

export class GroupOfLearners{
  constructor(num){
    this.peers = [...Array(num).keys()].map(value => new Learner(`Learner ${value}`));
    this.role = 'NO';
    this.motivation = 10;
    this.awareness = 'NO';
    this.feelings = ['main character'];
  }
}

export class Teacher extends Person{
  constructor(name){
    super(name);
    this.style = 'UNIQUE_VALUE';
    this.focus = {
      learner: 1,
      content: 1
    };

    //1. Learner in the middle
    this.exploredGroupNeedsBeforeTheCourse = true;
    this.adaptContentToTheGroup = true;

    //2. Methodology
    this.talkingTime = 19;
    this.attitude = 'humble';
    this.methodology = ['practical exercises', 'flipped classroom'];
    this.practiceTime = 60;

    //3. Role
    this.role = ['guide on the side', 'community manager'];
    this.answer = 'questions';
    this.actions = ['mentoring', 'suprise learners'];

    //4. Peers
    this.activities = ['individual', 'group'];
    this.groupActivities = ['group changes', 'groups created by the teacher'];

    //5. Assessment
    this.assessment = {
      objective: 'learn',
      feedback: 'quick',
      result: () => this.course.content = new Content('programming'),
      preparation: ['learning objectives']
    };

    //6. Motivation
    this.priorities = {
      'motivate learners': 5,
      'teaching': 2
    };
    this.activityTopics = ['learners interests'];
    this.preparation = ['little details'];
  }

  assignCourse(course){
    this.course = course;
    this.groupOfLearners = course.groupOfLearners;
  }

  action(){
    this.focus.learner +=1;
    this.focus.content -=1;

    this.groupOfLearners.role = 'CHANGED';
  }

  collectFeedback(){

  }

  executeGroupActivities(){
    this.groupOfLearners.motivation += 10;
  }

  executeAssessment(){
    this.groupOfLearners.awareness = 'AWARE';
  }
}

export class Content{
  constructor(title){
    this.title = title;
  }
}

export class Course{
  constructor(groupOfLearners, teacher, content){
    this.groupOfLearners = groupOfLearners;
    this.teacher = teacher;
    this.content = content;

    teacher.assignCourse(this);

    this.materials = 'commodity';
  }
}
