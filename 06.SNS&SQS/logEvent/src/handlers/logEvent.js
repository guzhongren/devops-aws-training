exports.handler = async (event, context) => {
  console.log(JSON.stringify(event));
  await Promise.resolve(event);
  return event;
}