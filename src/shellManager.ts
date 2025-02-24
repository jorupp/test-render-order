import { cache } from "react";

export const shellManager = cache((): ShellManager => {
    return {};
});

export type ShellManager = {
    theme?: string;
    username?: string;
}