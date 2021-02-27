export const handler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: 'Server Time: ' + Date(),
  }
}
