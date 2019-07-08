# vue-native-memory-leak
Demo to show a memory leak in simple lists

1. Clone project
2. Open terminal and navigate to the root of the project
3. Call yarn in terminal window
4. Call react-native eject to generate ios and android folder
5. Navigate into the ios folder
6. Open the project MEMT (MEMoryTest) with XCode
7. Select your device to run MEMT on emulator
8. Edit XCode scheme to release (Product->Scheme->Edit Scheme->Build Configuration = Release), to prevent some memory stacking of the RCTWebsocket
9. Click on Play

To create some memory leaks just press on the button insert to fill up the list and click on clear to reset the list.
If you make this many times, then the memory will not be released with vue native components and you should see in the Performance Monitor in XCode that the memory is stacking.
When you want to see the correct behavior of the list, then just replace in the App.vue the TodoItem with the ReactComp in the Template section. All Memory is releasing after clearing the list.
