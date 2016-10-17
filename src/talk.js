class Talk(title, author, context){
  constructor(title, author, context){
    this.title = title;
    this.author = author;
    this.context = context;
  }
}

const myTalk = new Talk( {

  title: 'Teach programming like a boss',
  speaker: new Speaker( 'Israel Gutiérrez', '@gootyfer' ),
  date: 'Oct. 20th 2016, 19:00h',
  location: 'Redradix offices',
  audience: programmers.filter(

    programmer => programmer.passions.includes( 'Teaching' )

  )

} );

myTalk.speaker.describe();
// Very much trainer, very little programmer

myTalk.speaker.getPassions();
// ['Education innovation', 'Programming']

myTalk.speaker.getLatestProjects();
// Technology-Enhanced Learning researcher
// Ironhack
// h4ckademy
// Talentum Empleo
// Adalab

myTalk.audience.ask([
  'Do you teach?',
  'Do you think you teach as you were taught?'
]);

myTalk.title =
  '6 ways to improve your (programming) teaching practice';

const theTeacher = new Teacher({

});


myTalk.waysToImproveYourTeachingPractice[1] =
  'Focus on the learner, not the content';

myTalk.waysToImproveYourTeachingPractice[2] =
  'Force a methodology shift';

myTalk.waysToImproveYourTeachingPractice[3] =
  'Change the role of the teacher';

myTalk.waysToImproveYourTeachingPractice[4] =
  'Empower the role of the peers';

myTalk.waysToImproveYourTeachingPractice[5] =
  'Assessment is feedback to improve';

myTalk.waysToImproveYourTeachingPractice[6] =
  'To motivate > To teach';


myTalk.close();
//Thank you!
