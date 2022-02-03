import React from "react";
import profileReducer, { addPostActionCreator } from "./profile-reducer";

it('new posts', () => {
    //TEST DATA
    let action = addPostActionCreator('neeeeeew text');
    let state = {
        postContent: [
            { id: 1, postText: 'Here I sit', likesCount: 1 },
            { id: 2, postText: 'For meditate', likesCount: 4 },
            { id: 3, postText: 'Should I shit', likesCount: 8 },
            { id: 4, postText: 'Or masturbate', likesCount: 8 }
        ]
    };

    //ACTION
    let newState = profileReducer(state, action);

    //EXPECTATED RESULT
    expect(newState.postContent.length).toBe(5);
})