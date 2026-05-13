import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const appSource = readFileSync(resolve(__dirname, './App.tsx'), 'utf8')
const cssSource = readFileSync(resolve(__dirname, './App.css'), 'utf8')

describe('App source structure', () => {
  it('includes a horizontal gallery section container', () => {
    expect(appSource).toContain('gallery-scroller')
  })

  it('includes a horizontal projects scroller container', () => {
    expect(appSource).toContain('projects-scroller')
  })

  it('includes a compact floating WhatsApp launcher and animated panel styles', () => {
    expect(appSource).toContain('floating-chat__toggle-badge')
    expect(appSource).toContain('floating-chat__toggle-label')
    expect(cssSource).toContain('floating-chat__panel--visible')
    expect(cssSource).toContain('@keyframes chatPanelIn')
  })

  it('uses a text-based brand lockup instead of the old wing/body pair', () => {
    expect(appSource).toContain('brand-text')
    expect(appSource).not.toContain('brand-wing')
  })

  it('renders the equipment section as collapsible and closed by default', () => {
    expect(appSource).toContain('isEquipmentOpen')
    expect(appSource).toContain('setIsEquipmentOpen')
    expect(appSource).toContain('equipment-section__toggle')
    expect(appSource).toContain('aria-expanded={isEquipmentOpen}')
    expect(appSource).toContain('{isEquipmentOpen && (')
  })
})
