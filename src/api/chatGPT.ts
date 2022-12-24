import { ChatGPTAPIBrowser } from 'chatgpt'

const api = new ChatGPTAPIBrowser({
    email: 'gogo4905@gmail.com',
    password: '@gogo4887'
  })
export const fetchText = async(text:string) => {
  await api.initSession()
  return await api.sendMessage(text) 
}
