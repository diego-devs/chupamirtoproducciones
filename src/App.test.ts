import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const source = readFileSync(new URL('./App.tsx', import.meta.url), 'utf8')

describe('Chupamirto landing content', () => {
  it('includes a horizontal gallery section container', () => {
    expect(source).toContain('gallery-scroller')
  })

  it('includes a horizontal video scroller container', () => {
    expect(source).toContain('projects-scroller')
  })

  it('includes a floating WhatsApp chat launcher', () => {
    expect(source).toContain('floating-chat')
    expect(source).toContain('wa.me/5215561117954')
  })

  it('uses a dedicated hummingbird logo lockup instead of the old wing/body pair', () => {
    expect(source).toContain('hummingbird-logo')
    expect(source).not.toContain('brand-wing')
  })
})
