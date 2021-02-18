(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n(3),o=n(7),i=(n(0),n(257)),r=n(258),c={id:"branches",title:"Branches",sidebar_label:"Lesson"},b={unversionedId:"git/branches/branches",id:"git/branches/branches",isDocsHomePage:!1,title:"Branches",description:"Learning objectives",source:"@site/docs/git/branches/branches.md",slug:"/git/branches/branches",permalink:"/git/branches/branches",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/git/branches/branches.md",version:"current",sidebar_label:"Lesson",sidebar:"Git",previous:{title:"Homework",permalink:"/git/cli/homework"},next:{title:"Homework",permalink:"/git/branches/homework"}},l=[{value:"Learning objectives",id:"learning-objectives",children:[]},{value:"1) What is a branch?",id:"1-what-is-a-branch",children:[{value:"Why would we want to do this?",id:"why-would-we-want-to-do-this",children:[]},{value:"How do we create a new branch?",id:"how-do-we-create-a-new-branch",children:[]},{value:"How do I know what branch I&#39;m on?",id:"how-do-i-know-what-branch-im-on",children:[]},{value:"Exercise 1 (15 minutes)",id:"exercise-1-15-minutes",children:[]}]},{value:"2) Switching back to main",id:"2-switching-back-to-main",children:[{value:"Exercise 2 (5 minutes)",id:"exercise-2-5-minutes",children:[]}]},{value:"3) Managing multiple branches",id:"3-managing-multiple-branches",children:[{value:"Exercise 3 (10 minutes)",id:"exercise-3-10-minutes",children:[]}]},{value:"4) Managing branches for pull requests",id:"4-managing-branches-for-pull-requests",children:[]},{value:"5) Deleting branches",id:"5-deleting-branches",children:[]},{value:"6) Comparing local and remote",id:"6-comparing-local-and-remote",children:[]},{value:"7) On &quot;git checkout&quot;",id:"7-on-git-checkout",children:[]},{value:"Coursework",id:"coursework",children:[]},{value:"Feedback",id:"feedback",children:[]}],s={toc:l};function h(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"learning-objectives"},"Learning objectives"),Object(i.b)("p",null,"By the end of this class, you should be able to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Explain why branches can be useful when using Git."),Object(i.b)("li",{parentName:"ul"},"Create a branch, and add commits to it."),Object(i.b)("li",{parentName:"ul"},"Switch between branches."),Object(i.b)("li",{parentName:"ul"},"Create a pull request from a branch to the main branch."),Object(i.b)("li",{parentName:"ul"},"Work with another trainee on non-conflicting changes to a single branch.")),Object(i.b)("hr",null),Object(i.b)("p",null,"So far, we've seen that we can use Git to share our work, get code review, and view history. This week, we're going to learn more about how we can use Git to work together in groups, and to work on more than one thing at the same time."),Object(i.b)("p",null,"For this class, we're going to use the Git CLI, but everything we're doing can also be done in GitHub Desktop. Remember you can always check the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"cheatsheet-cli"}),"cheatsheet"),"!"),Object(i.b)("p",null,"In this class, we're going to work with a GitHub repository of recipes."),Object(i.b)("p",null,"CodeYourFuture has made a ",Object(i.b)("em",{parentName:"p"},"template")," repository on GitHub. Go to"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/GitExampleRecipes"}),"https://github.com/CodeYourFuture/GitExampleRecipes")),Object(i.b)("p",null,'and click on "Use this template" to make a repository owned by your user account which contains the right files. Then clone your newly created repository onto your computer. You\'re going to do all of your exercises in your copy of this repository.'),Object(i.b)("h2",{id:"1-what-is-a-branch"},"1) What is a branch?"),Object(i.b)("p",null,"We saw in the first Git lesson that Git stores the history of your changes as a list of commits, one after the other:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Committing to the Master Branch",src:n(438).default})),Object(i.b)("p",null,'Since then, you\'ve been pressing a button in GitHub Desktop called "Commit to main", or running ',Object(i.b)("inlineCode",{parentName:"p"},"git commit"),', to make a new commit. But what does that "to main" mean? main is called a ',Object(i.b)("em",{parentName:"p"},"branch"),", which is a list of commits. It turns out, you can have more than one branch, and they can share some commits if they want:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Committing to another Branch",src:n(439).default})),Object(i.b)("h3",{id:"why-would-we-want-to-do-this"},"Why would we want to do this?"),Object(i.b)("p",null,"There are a few reasons. The main one is: So you can work on more than one thing at the same time."),Object(i.b)("p",null,"Let's look at our repo of recipes. Right now, it contains one recipe, for a brownie in a mug. There are a couple of changes we want to make:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"We want to add an optional topping to put on top of the brownie (maybe ice cream, maybe you have a better idea). We'll need to add it both as an extra ingredient, and an extra step at the end."),Object(i.b)("li",{parentName:"ol"},'A lot of recipes start with a story of how the author found them, or some time they\'ve really enjoyed the recipe. We want to add a story, before the "What you need" section.')),Object(i.b)("p",null,"Let's imagine we start writing the story, but we want to quickly add the optional ice cream step. And let's imagine that we want someone else to review both changes before we merge them to main."),Object(i.b)("p",null,"We could make both changes to main, and ask someone to review them both, but then they both need to be right before we can merge either one - we can't merge just the ice cream step until the story is finished."),Object(i.b)("p",null,"Or we could only make the ice cream change, then send it for review, then when that merges, write the story and send it for review. But that slows us down, and also means that the reviewer can't review both changes at the same time."),Object(i.b)("p",null,"It would be better if we could send out one pull request for the ice cream change, and another for the story. We can do this - with branches:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Committing to another Branch",src:n(440).default})),Object(i.b)("p",null,"We can then add new commits on top of each branch, separately, and later on merge both branches to main."),Object(i.b)("h3",{id:"how-do-we-create-a-new-branch"},"How do we create a new branch?"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"$ git switch --create story\nSwitched to a new branch 'story'\n")),Object(i.b)("p",null,"Let's run through the bits of that command:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"git")," - we're running a git command."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"switch")," - we're switching to a different branch than the one we're on right now."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"--create")," - we want git to create the branch we're switching to."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"story")," - the branch we want to switch to (and create) is called ",Object(i.b)("inlineCode",{parentName:"p"},"story"),"."),Object(i.b)("p",null,"Running this command doesn't change any of the files in our repository - they stay the same, but if we commit changes, they will only get committed on this branch. If we switched back to the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," branch, the changes would be un-done. But if we switch back to ",Object(i.b)("inlineCode",{parentName:"p"},"story"),", they'll come back!"),Object(i.b)("p",null,"(Note that some of the graphics in this class show slightly different commands than the ones we're teaching you. What we're teaching you is the newer way to do things - there's a note at the bottom of the lesson about the old way if you're curious. But we recommend you use ",Object(i.b)("inlineCode",{parentName:"p"},"git switch")," :))"),Object(i.b)("h3",{id:"how-do-i-know-what-branch-im-on"},"How do I know what branch I'm on?"),Object(i.b)("p",null,"You've already run one command which tells you this, you just may not have noticed!"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"$ git status\nOn branch story\nnothing to commit, working tree clean\n")),Object(i.b)("p",null,"That's right, ",Object(i.b)("inlineCode",{parentName:"p"},"git status")," tells you what branch you're on (and about any changes you haven't committed)."),Object(i.b)("p",null,"You can also find out more about branches by running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"$ git branch\n  main\n* story\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"git branch")," tells you what branches exist in your repository, and puts a star next to the one you're currently switched to."),Object(i.b)("h3",{id:"exercise-1-15-minutes"},"Exercise 1 (15 minutes)"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Exercise")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Let's make a new branch, and make a new commit on it."),Object(i.b)("p",{parentName:"div"},"Create a branch named ",Object(i.b)("inlineCode",{parentName:"p"},"story"),", and edit ",Object(i.b)("inlineCode",{parentName:"p"},"mug-brownie.md"),"."),Object(i.b)("p",{parentName:"div"},'Before the "What you need" heading, make up a story about how the author discovered the recipe, or a time they enjoyed it.'),Object(i.b)("p",{parentName:"div"},"When you've written a bit, make a commit (make sure to give it a good commit message!)"),Object(i.b)("p",{parentName:"div"},"Explore the history with ",Object(i.b)("inlineCode",{parentName:"p"},"git log")," - make sure you understand the commits in your history and why they're there."),Object(i.b)("p",{parentName:"div"},"If you're confused, or don't understand what you're seeing, ask on Slack now!"))),Object(i.b)("h2",{id:"2-switching-back-to-main"},"2) Switching back to main"),Object(i.b)("p",null,"Can you guess how to switch back to the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," branch?"),Object(i.b)("p",null,"What do you think will happen to the contents of the files when you do?"),Object(i.b)("p",null,"What will the history look like?"),Object(i.b)("h3",{id:"exercise-2-5-minutes"},"Exercise 2 (5 minutes)"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Exercise")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Switch back to the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," branch (hint: The command to run is like the one you used to create a new branch, but you're not creating a new one)."),Object(i.b)("p",{parentName:"div"},"Look at the contents of ",Object(i.b)("inlineCode",{parentName:"p"},"mug-brownie.md")," - what's changed?"),Object(i.b)("p",{parentName:"div"},"Explore the history with ",Object(i.b)("inlineCode",{parentName:"p"},"git log")," - make sure you understand the commits in your history and why they're there."),Object(i.b)("p",{parentName:"div"},"If you're confused, or don't understand what you're seeing, ask on Slack now!"))),Object(i.b)("h2",{id:"3-managing-multiple-branches"},"3) Managing multiple branches"),Object(i.b)("p",null,"When we created our ",Object(i.b)("inlineCode",{parentName:"p"},"story")," branch, it shared its history with the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," branch. This is because whenever we create a branch, it will start off being the same as the branch we were on before."),Object(i.b)("p",null,"In general, you always want to make new branches based on ",Object(i.b)("inlineCode",{parentName:"p"},"main"),", so always make sure to ",Object(i.b)("inlineCode",{parentName:"p"},"git switch main")," before creating a new branch."),Object(i.b)("p",null,"If you find that the history of a new branch isn't what you expect, you probably didn't switch back to ",Object(i.b)("inlineCode",{parentName:"p"},"main")," before creating the new branch. We'll learn how to delete branches soon."),Object(i.b)("p",null,"You can have multiple branches at the same time, and you can work on them separately. When you make a pull request, it will be tied to one branch."),Object(i.b)("p",null,"You can make more than one pull request, as long as each is created from a different branch. This can be useful, so that you can propose multiple changes to code separately."),Object(i.b)("p",null,"For example, if you have two changes to make, and one is really simple (like fixing a typo) and the other may need some discussion (like changing the colour scheme of a page), if you make separate pull requests (from separate branches), the easy one can get merged while the other one is being discussed."),Object(i.b)("p",null,"Having small, separate pull requests also helps to keep your changes small, and allows your reviewer to focus on one thing, which makes their job easier."),Object(i.b)("h4",{id:"naming"},"Naming"),Object(i.b)("p",null,"Just like with variables and files, you want to name your branches in ways that will help you remember/understand what they're for. We normally name Git branches with 1-5 words, with no spaces. Some good examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"add-story")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"make-button-red")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"delete-out-of-date-news"))),Object(i.b)("p",null,"And some bad examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"branch1")," or ",Object(i.b)("inlineCode",{parentName:"li"},"branch2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"new")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"feature")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"addalltheingredientsbutalsoremovevanilla"))),Object(i.b)("h3",{id:"exercise-3-10-minutes"},"Exercise 3 (10 minutes)"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Exercise")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make another branch based on ",Object(i.b)("inlineCode",{parentName:"p"},"main")," called ",Object(i.b)("inlineCode",{parentName:"p"},"extra-topping")," (remember to make sure you're on the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," branch before creating the new one!)."),Object(i.b)("p",{parentName:"div"},"Add a new topping to the recipe. Make sure to include it both in the ingredients list, and the steps."),Object(i.b)("p",{parentName:"div"},"Commit your changes."))),Object(i.b)("h2",{id:"4-managing-branches-for-pull-requests"},"4) Managing branches for pull requests"),Object(i.b)("p",null,"We've seen before that to make a pull request from the Git CLI the steps are to ",Object(i.b)("inlineCode",{parentName:"p"},"git push")," (to make the remote's version of ",Object(i.b)("inlineCode",{parentName:"p"},"main")," be the same as your local version), and then make a pull request from the GitHub UI."),Object(i.b)("p",null,"Most developers avoid doing work on their ",Object(i.b)("inlineCode",{parentName:"p"},"main")," branch, and always work on some other branch. This is because if you commit things to ",Object(i.b)("inlineCode",{parentName:"p"},"main"),", all new branches you create will have those changes on, and you generally want to make pull requests with only a specific set of changes compared to upstream's ",Object(i.b)("inlineCode",{parentName:"p"},"main"),"."),Object(i.b)("p",null,"From now on, your steps to start working on code for a pull request should be:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git switch main")," (switch back to the main branch)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git pull")," (pull in any changes from upstream)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git switch --create my-new-branch-name")," (make a new branch)"),Object(i.b)("li",{parentName:"ul"},"(make your changes)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git commit")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git push")," (send your changes to the remote)"),Object(i.b)("li",{parentName:"ul"},"Create a pull request through the GitHub UI")),Object(i.b)("p",null,"If you need to make changes (e.g. because your reviewer gave you feedback), you should switch to your branch, make the changes, commit them, and push them to the remote again. The pull request will automatically get updated with the changes you committed."),Object(i.b)("h2",{id:"5-deleting-branches"},"5) Deleting branches"),Object(i.b)("p",null,"After you merge your pull request, you should delete your branch. GitHub can't change things on your computer automatically, so you need to do it yourself."),Object(i.b)("p",null,"You can't delete a branch you're switched to, so first, switch to ",Object(i.b)("inlineCode",{parentName:"p"},"main"),": ",Object(i.b)("inlineCode",{parentName:"p"},"git switch main"),"."),Object(i.b)("p",null,"Then pull in any changes from upstream (this helps Git to work out whether you've already merged your PR): ",Object(i.b)("inlineCode",{parentName:"p"},"git pull"),"."),Object(i.b)("p",null,"And finally, delete the branch: ",Object(i.b)("inlineCode",{parentName:"p"},"git branch --delete your-branch-name"),"."),Object(i.b)("h2",{id:"6-comparing-local-and-remote"},"6) Comparing local and remote"),Object(i.b)("p",null,"Before, we saw that ",Object(i.b)("inlineCode",{parentName:"p"},"git status")," can tell you what branch you're on, and any changes you haven't commited."),Object(i.b)("p",null,"But it can also tell you more than that!"),Object(i.b)("p",null,"If you have made commits locally, but haven't pushed them, ",Object(i.b)("inlineCode",{parentName:"p"},"git status")," may say something like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"$ git status\nYour branch is ahead of 'origin/story' by 2 commits.\n")),Object(i.b)("p",null,"Or if you have run a ",Object(i.b)("inlineCode",{parentName:"p"},"git fetch")," but not a ",Object(i.b)("inlineCode",{parentName:"p"},"git pull"),", and the remote has changes that you haven't pulled yet, it may say:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"$ git status\nYour branch is behind 'origin/main' by 3 commits, and can be fast-forwarded.\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"git status")," can remind you that you have or haven't pushed or pulled yet."),Object(i.b)("p",null,"After you've merged a pull request, you can delete your branch, because you don't need it any more - your code is on the main branch!"),Object(i.b)("h2",{id:"7-on-git-checkout"},'7) On "git checkout"'),Object(i.b)("p",null,"On the internet, you may see people referring to ",Object(i.b)("inlineCode",{parentName:"p"},"git checkout")," and ",Object(i.b)("inlineCode",{parentName:"p"},"git checkout -b")," as ways to switch, or create, branches. These are old versions of the commands ",Object(i.b)("inlineCode",{parentName:"p"},"git switch")," and ",Object(i.b)("inlineCode",{parentName:"p"},"git switch --create"),". They work the same, but because their names are less good (and sometimes they can also do extra things, which may be surprising), they have been replaced with ",Object(i.b)("inlineCode",{parentName:"p"},"git switch"),". You should use ",Object(i.b)("inlineCode",{parentName:"p"},"git switch"),", but don't be scared if you see someone talking about ",Object(i.b)("inlineCode",{parentName:"p"},"git checkout")," - it's the same thing!"),Object(i.b)("h2",{id:"coursework"},"Coursework"),Object(i.b)("p",null,"You can find this weeks coursework ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./homework"}),"here"),"."),Object(i.b)("h2",{id:"feedback"},"Feedback"),Object(i.b)("p",null,"It's really helpful if you give us feedback for this lesson. This helps us improve it for future students!"),Object(i.b)(r.a,{module:"Git",week:"Week 4",mdxType:"Feedback"}))}h.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),h=s(n),m=a,d=h["".concat(r,".").concat(m)]||h[m]||u[m]||i;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},258:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),o=n.n(a);n(56);function i(e){var t="https://docs.google.com/forms/d/e/1FAIpQLScq8Zgr0pz7aMDj0D768eCpW798XgtDsKfpA6BquqK5Hdtj4A/viewform?embedded=true&entry.1672476057="+e.module.replace(" ","+")+"&entry.74981796="+e.week.replace(" ","+");return o.a.createElement("div",{className:"feedback"},o.a.createElement("div",{className:"feedback__wrapper"},o.a.createElement("iframe",{src:t,width:"640",height:"640",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),o.a.createElement("center",null,o.a.createElement("p",null,"Not loading? Form can be found"," ",o.a.createElement("a",{target:"_blank",href:t},"here"),". Click"," ",o.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/1F2mB10japkHAPb3H-9Q4YrYH0i61GoMG1tk-P4ZT808/edit"},"here")," ","to get edit access."))))}},438:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/git-main-commit-9f9f35794e5f41ca507149ff6661004f.gif"},439:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/git-branch-commit-2e0b52d22f54a826b9f88d1a91f49557.gif"},440:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/git-example-commit-2ded07ec79a19773f3fce7091c9de7a8.gif"}}]);