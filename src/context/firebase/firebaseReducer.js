import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SAVE_NOTE, FETCH_FAVNOTES, REMOVE_FAVNOTE } from "../types"

const handlers = {
   [SHOW_LOADER]: state => ({...state, loading: true}),
   [ADD_NOTE]:(state, {payload}) => ({
     ...state, 
     notes: [...state.notes, payload]
    }), 
    [SAVE_NOTE]:(state, {payload}) => ({
      ...state, 
      favnotes: [...state.favnotes, payload]
     }),
    [FETCH_FAVNOTES]: (state, {payload}) => ({...state, favnotes: payload}), 
    [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload}),
    [REMOVE_NOTE]: (state, {payload}) => ({
     ...state,
     notes: state.notes.filter(note => note.id !== payload)
    }),
    [REMOVE_FAVNOTE]: (state, {payload}) => ({
      ...state,
      favnotes: state.favnotes.filter(favnote => favnote.id !== payload)
     }),
   DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT 
  return handle(state, action)
}