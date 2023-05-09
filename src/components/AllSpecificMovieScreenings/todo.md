
[ ] Create file structure for both components and styling files
    [ ] write imports for files/types etc
    [ ] add reusable code
    [ ] use ScreeningType
[ ] Write unstyled JSX for components
    [ ] Component contains a list of components : `ul / li` 
        [ ] The component that is the list item should contain Time, place language and a button to purchase tickets
        [ ] There should be flags for subs and spoken language with a text disclaimer : `svg?` 
            [ ] check out the link on figma for a flag resource. They are sorted according to `'en/ENG'` standard
        [ ] The button should link to the booking point for the clicked screening id : `use Link in next, pass .id as query`
    [ ]The list container should state what date 
    [ ]The list container should divide itself from other list containers

[ ] Write unstyled JSX for container 
    [ ] The container should contain components of lists: a list of list or just list components that flow downwards 
    [ ] The container should have a header at top and a button at the bottom
    [ ] the button should display 2 more days of screenings and continue to add cumulatively as you click until there is a max of 5 days.
        [ ] use `expanded ? ...` and `setState` with an iteration instead of boolean
    [ ] Add serversideprops to fetch data from API/database 
        [ ] create a mock for data
        [ ] use the mocked data to test functionality


[ ] Style components 
