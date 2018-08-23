# Github Comment Draft

Automatically saves/restores your issue and PR draft comments on Github.

[Chrome web store](https://chrome.google.com/webstore/detail/github-comment-draft/nckohkpmnocinomefhgnofbicepplojh)

![githubcommentdraft-demo-prissue](https://user-images.githubusercontent.com/1630378/44536420-6091ae00-a737-11e8-97c2-663ab3677aaa.gif)

![githubcommentdraft-demo](https://user-images.githubusercontent.com/1630378/44530470-68e2ec80-a729-11e8-8164-b443bfc79591.gif)

Originated from https://github.com/isaacs/github/issues/376

-----------------

What this plugin does

1. saves every single input in textareas into `localStorage`
2. restores the saved draft if the focused textarea is empty
3. removes the draft on form submit

The darker blue border color around the focused text area (see the gif above) indicates that the plugin is working on the field.

If you wanna clear the saved drafts manually, just do it  by yourself.
In develper console,

```
for(let i=0;i<localStorage.length;i++) {
  localStorage.key(i).indexOf('github-comment-draft') === 0 && localStorage.removeItem(localStorage.key(i))
}
```

__Caveat: This plugin takes care of input in `<textarea />` only. It won't cover the github built in editors like https://github.com/Liooo/github-comment-draft/edit/master/README.md__


PRs are welcome.
