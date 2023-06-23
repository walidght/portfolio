interface Icons {
    [moduleName: string]: string;
}

const imagePaths: Icons = {
    express: (await import('../assets/techs/express.svg')).default,
    mongo: (await import('../assets/techs/mongo.svg')).default,
    node: (await import('../assets/techs/node.svg')).default,
    oracle: (await import('../assets/techs/oracle.svg')).default,
    react: (await import('../assets/techs/react.svg')).default,
    sass: (await import('../assets/techs/sass.svg')).default,
    sqlite: (await import('../assets/techs/sqlite.svg')).default,
    c: (await import('../assets/techs/c.svg')).default,
    java: (await import('../assets/techs/java.svg')).default,
    js: (await import('../assets/techs/js.svg')).default,
    ts: (await import('../assets/techs/ts.svg')).default,
    python: (await import('../assets/techs/python.svg')).default,
    ai: (await import('../assets/techs/ai.svg')).default,
    figma: (await import('../assets/techs/figma.svg')).default,
    pr: (await import('../assets/techs/pr.svg')).default,
    ps: (await import('../assets/techs/ps.svg')).default,
};

export default imagePaths;
