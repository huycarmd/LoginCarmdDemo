export interface Tutorial {
    tutorialVideos:   TutorialVideo[];
    tutorialArticles: TutorialArticle[];
    tutorialManuals:  TutorialArticle[];
    message:          Message;
  }
  
  export interface Message {
    code:        number;
    description: string;
  }
  
  export interface TutorialArticle {
    title: string;
    link:  string;
  }
  
  export interface TutorialVideo {
    name:   string;
    videos: TutorialArticle[];
  }