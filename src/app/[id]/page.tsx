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
    let usernameResolve: (username: string) => void;
    let themeResolve: (username: string) => void;
    const usernamePromise = new Promise<string>(resolve => usernameResolve = resolve);
    const themePromise = new Promise<string>(resolve => themeResolve = resolve);
    sm.getUsername = () => usernamePromise;
    sm.getTheme = () => themePromise;
    console.log('shellManager setup complete')

    const { theme, username } = await (async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const [theme, username] = id.split('-');
        return { theme, username };
    })();
    usernameResolve!(username);
    themeResolve!(theme);

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