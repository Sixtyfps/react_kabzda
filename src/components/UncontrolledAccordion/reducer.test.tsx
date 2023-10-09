import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";
import {action} from "@storybook/addon-actions";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})


    //expectation
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})


    //expectation
    expect(newState.collapsed).toBe(false)
})

test('should be error cause of incorrect action type', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    expect(()=>{
        reducer(state, {type: "FAKE"})
    }).toThrowError()


})