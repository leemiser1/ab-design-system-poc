<script lang="ts">
  import './Button.css';
  import type { Snippet } from 'svelte';

  interface Props {
    variant?: 'filled' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    label?: string;
    showLeadingIcon?: boolean;
    showTrailingIcon?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onclick?: (e: MouseEvent) => void;
    children?: Snippet;
  }

  let {
    variant = 'filled',
    size = 'medium',
    disabled = false,
    loading = false,
    label = 'Button',
    showLeadingIcon = false,
    showTrailingIcon = false,
    type = 'button',
    onclick,
    children,
  }: Props = $props();

  const isDisabled = $derived(disabled || loading);
</script>

<button
  {type}
  class="btn btn--{variant} btn--{size}"
  disabled={isDisabled}
  aria-disabled={isDisabled}
  aria-busy={loading}
  {onclick}
>
  {#if loading}
    <span class="btn__spinner" aria-hidden="true"></span>
    <span>Loading…</span>
  {:else if children}
    {@render children()}
  {:else}
    {#if showLeadingIcon}
      <span class="btn__icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 11H13V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>
        </svg>
      </span>
    {/if}
    {label}
    {#if showTrailingIcon}
      <span class="btn__icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42L14.59 11H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 1.42 1.42l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76z"/>
        </svg>
      </span>
    {/if}
  {/if}
</button>
