# export

export statement is used when creating JavaScript modules to export functions, objects, or primitive values from the modules so they can be used by other programs with the import statement.

### Named exports
```
// exports a function declared earlier

export { myFunction }
```

```
// export a constant
export const foo = Math.sqrt(2)
```

### Default exports (function)

```
export default function() {}
```

### Default exports (class)

```
export default class {}
```

Reference: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export