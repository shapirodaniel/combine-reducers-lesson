import { combineReducers } from 'redux';

export const AUTHENTICATED = 'AUTHENTICATED';
export const GOT_ROOMS = 'GOT_ROOMS';
export const BOOK_ROOM = 'BOOK_ROOM';

const reducer = (state = { user: {}, rooms: [] }, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, user: action.payload };
    case GOT_ROOMS:
      return { ...state, rooms: action.payload };
    case BOOK_ROOM:
      const updatedRooms = state.rooms.map((room) => {
        if (room.id === action.roomId) {
          return { ...room, booked: true };
        } else {
          return room;
        }
      });

      return {
        ...state,
        rooms: updatedRooms,
        user: { ...state.user, bookedRoom: action.roomId },
      };
    default:
      return state;
  }
};

export default reducer;
