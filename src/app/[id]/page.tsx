import { shellManager } from "@/shellManager";

export const dynamic = 'force-dynamic';

type Props = {
    params: {
      id: string;
    };
  };
  
export default async function IdPage({params: { id }} : Props) {
    console.log('rendering IdPage');

    const sm = shellManager();
    sm.getUsername = (async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const [, username] = id.split('-');
        return username;
    });
    sm.getTheme = (async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const [theme] = id.split('-');
        return theme;
    });
    console.log('shellManager setup complete')

    const [ theme, username ] = await Promise.all([sm.getTheme(), sm.getUsername()]);

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