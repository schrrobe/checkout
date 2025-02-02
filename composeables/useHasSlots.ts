// composables/useHasSlots.ts
import { computed } from 'vue';
import type { Slots } from 'vue';

/**
 * Überprüft, ob Slots in einer Komponente vorhanden sind.
 *
 * @param slots - Die Slots der Komponente (z. B. `useSlots()`).
 * @returns Ein Objekt mit Funktionen, um das Vorhandensein von Slots zu überprüfen.
 */
export function useHasSlots(slots: Slots) {
    /**
     * Überprüft, ob der Standard-Slot (default) vorhanden ist.
     */
    const hasDefaultSlot = computed(() => !!slots.default);

    /**
     * Überprüft, ob ein bestimmter benannter Slot vorhanden ist.
     *
     * @param name - Der Name des Slots (z. B. 'header', 'footer').
     */
    const hasNamedSlot = (name: string) => computed(() => !!slots[name]);

    /**
     * Überprüft, ob irgendein Slot vorhanden ist (default oder benannt).
     */
    const hasAnySlot = computed(() => {
        return hasDefaultSlot.value || Object.keys(slots).some((name) => name !== 'default' && !!slots[name]);
    });

    return {
        hasDefaultSlot,
        hasNamedSlot,
        hasAnySlot,
    };
}