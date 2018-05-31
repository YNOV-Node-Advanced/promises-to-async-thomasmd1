async function superCompress(input) {
  try{
    const cached = await readFromCache(input);
    const cleaned = await cleanCacheMetadata(cached);
    return compress(content)
  }
  catch(error){
    if (error.code != 'NoCache') {
      throw error;
    }
    const reading = await readFromFile(input);
    const stored = await storeInCache(input,reading)
    const content = await compress(content);
    
  }
  return compress(content)
}