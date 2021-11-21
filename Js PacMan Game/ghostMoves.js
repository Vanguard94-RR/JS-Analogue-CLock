import { DIRECTIONS, OBJECT_TYPE } from "./setup";

//Movimiento Primitivo Fantasmas

export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;

  //crear matriz con los objetos de direccion
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.GHOST)
  ) {
      // obtener random key
      const key = keys[Math.floor(Math.random()*keys.length)];
      // siguiente movimiento
      dir = DIRECTIONS[key];
      //siguiente movimiento
      nextMovePos = position +dir.movement;

  }
  return{nextMovePos, direction:dir};
}
