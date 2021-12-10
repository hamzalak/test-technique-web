import { equipementsinitialState } from "./IntialState";
import { ActionEnum, DipatchType } from "./DispatchType";
import { Equipement } from "../../../model/Equipement";
export function equipementReducer(
  state = equipementsinitialState,
  action: DipatchType
) {
  const { type, payload } = action;

  switch (type) {
    case ActionEnum.FETCH_EQUIPEMENT:
      return {
        ...state,
        requestedItem: state.items[payload as string],
      };
    case ActionEnum.FETCH_ALL_EQUIPEMENTS:
      return {
        items: { ...(payload as Record<string, Equipement>) },
        requestedItem: state.requestedItem || {},
      };

    default:
      return state;
  }
}
