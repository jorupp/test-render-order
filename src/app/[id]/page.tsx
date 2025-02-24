import { shellManager } from "@/shellManager";

type Props = {
    params: {
      id: string;
    };
  };
  
export default async function IdPage({params: { id }} : Props) {
    console.log('rendering IdPage');
    const { theme, username } = await (async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const [theme, username] = id.split('-');
        return { theme, username};
    })();

    const sm = shellManager();
    sm.username = username;
    sm.theme = theme;
    console.log('rendered IdPage');

    return <div>
        <h3>This is ID Page</h3>
        <ul>
            <li>username: {username}</li>
            <li>theme: {theme}</li>
        </ul>
    </div>
}