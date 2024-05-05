# RageQuitter
Automatically resign when you close the tab in a chess.com game.

This extension should trigger the resign button when you close the tab in Firefox.

It only works if you start from https://chess.com/play/online

The method to make this work is probably bad; every 5 seconds it checks if the resign button is available, if it is, it copies it. This has the benefit of recopying the button each time you have a new game in the same session. I don't know enough about programming to know if its better to listen for some other kind of change in state of the website to know to copy the button. 
