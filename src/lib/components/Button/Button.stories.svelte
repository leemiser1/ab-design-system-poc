<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';

  const { Story } = defineMeta({
    title: 'Components/Button',
    component: Button,
    argTypes: {
      variant: {
        control: 'select',
        options: ['filled', 'outlined', 'text'],
      },
      size: {
        control: 'select',
        options: ['small', 'medium', 'large'],
      },
      disabled: { control: 'boolean' },
      loading: { control: 'boolean' },
      showLeadingIcon: { control: 'boolean' },
      showTrailingIcon: { control: 'boolean' },
      label: { control: 'text' },
    },
    args: {
      label: 'Submit',
      size: 'medium',
    },
  });
</script>

<Story name="Filled" args={{ variant: 'filled' }} />

<Story name="Outlined" args={{ variant: 'outlined' }} />

<Story name="Text" args={{ variant: 'text' }} />

<Story name="Disabled" args={{ variant: 'filled', disabled: true }} />

<Story name="Loading" args={{ variant: 'filled', loading: true }} />

<Story name="WithLeadingIcon" args={{ variant: 'filled', showLeadingIcon: true }} />

<Story name="WithTrailingIcon" args={{ variant: 'outlined', showTrailingIcon: true }} />
