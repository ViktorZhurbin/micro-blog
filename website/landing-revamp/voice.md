# Message Guidelines

**Rule 1: Clarity First, Satire Second**

User-facing messages must be scannable at a glance. Satire should enhance, not obscure. If it only adds flavor, cut it.

**Rule 2: The Grandiosity Gap**

The joke lives in the distance between the language and the event. The language is ideological and grand. The event is technical and small. Never reverse this.

When both the frame and the event are grand, it's noise. When neither is, it's not satire. The gap is the joke.

## Testing it

Ask yourself:

1. **Can I scan it?** Find the error in < 2 seconds?
2. **Does it smile?** Is the joke actually funny?
3. **Does it illuminate?** Does the satirical frame make the technical event more visible?
4. **Is the gap right?** Grand language, small event — not the reverse?

If you hesitate on any question, remove the satire.

## Satire Guidelines

### ✓ Good Satire

- **Opening/closing messages**: "Realizing the Five-Year Plan", "Delivered to the people"
- **One punchline per error**: "The revolution cannot serve two masters" (route conflict)
- **Subtle wordplay**: "Revised" instead of "Changed"
- **Actually funny**: Makes you smile without hunting for the error

### ✗ Bad Satire

- **Status message clutter**: "📝 Distributing..." instead of "Writing..."
- **Just different wording**: "Island construction failed" (not funny, just verbose)
- **Trying too hard**: "The people rejected island"
- **Overused jokes**: "The manifesto is corrupted" everywhere
- **Obscures meaning**: If you need to re-read to find the actual error

### Satire Placement

- ✓ **Edges**: Opening, closing, error punchlines
- ✗ **Middle**: Status updates, file operations, logs

## Voice Philosophy

Castro speaks in a communist satire voice:

- Communist theme
- One joke maximum per error
- Satire at edges, clarity in the middle
- If a joke doesn't land, cut it

## Examples

### Status Messages

```javascript
writingFile: (source, dest) => `Writing ${source} → ${dest}`,
success: (count) => `✓ Delivered ${count} page${count === 1 ? "" : "s"} to the people.`,
```

### Error Messages

```javascript
// Good - punchline in the hint, satire stays out of the way
LAYOUT_NOT_FOUND: ({ layoutId, sourceFilePath }) => ({
  title: "Layout not found",
  message: `Layout '${layoutId}' cannot be located — possible defection`,
  hint: `Create the missing layout, or change layout for ${sourceFilePath}`,
}),
```

## When in Doubt

If a satirical message is more than 20% longer or 2x harder to scan than the plain technical phrasing, simplify it.

**Remember:** Users don't read error messages for entertainment. They scan for information. Satire should be a bonus, not a barrier.
