// @flow

const config = {
  type: 'CELL',
  maxHold: 1,
  width: 1,
  height: 1,
};

const make = (
  position: Vector,
  holding: ?entity,
): Cell => {
  return {
    ...config,
    id: -1,
    position,
    theta: 0,
    holding,
  };
};

const render = (ctx, game, cell) => {
  ctx.save();
  ctx.fillStyle = "orange";
  ctx.strokeStyle = 'white';
  if (cell.holding != null && cell.holding.type == 'HONEY') {
    ctx.fillStyle = "#FFDAB9";
    ctx.strokeStyle = 'orange';
  }
  // ctx.fillRect(
  //   cell.position.x, cell.position.y,
  //   cell.width, cell.height,
  // );

  const {x, y} = cell.position;
  const {width, height} = cell;
  ctx.lineWidth = 0.1;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width / 2, y - height / 3);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x + width / 2, y + height + height / 3);
  ctx.lineTo(x, y + height);

  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.restore();
};

module.exports = {
  config, make, render,
};
