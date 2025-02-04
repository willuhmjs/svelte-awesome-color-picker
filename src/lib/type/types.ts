import type SliderIndicator from '../components/variant/default/SliderIndicator.svelte';
import type PickerIndicator from '../components/variant/default/PickerIndicator.svelte';
import type PickerWrapper from '../components/variant/default/PickerWrapper.svelte';
import type SliderWrapper from '../components/variant/default/SliderWrapper.svelte';
import type TextInput from '../components/variant/default/TextInput.svelte';
import type A11yNotice from '../components/variant/default/A11yNotice.svelte';
import type A11ySingleNotice from '../components/variant/default/A11ySingleNotice.svelte';
import type A11ySummary from '$lib/components/variant/default/A11ySummary.svelte';
import type Input from '../components/variant/default/Input.svelte';
import type Wrapper from '../components/variant/default/Wrapper.svelte';

export type Components = {
	pickerIndicator: typeof PickerIndicator;
	sliderIndicator: typeof SliderIndicator;
	alphaIndicator: typeof SliderIndicator;
	pickerWrapper: typeof PickerWrapper;
	sliderWrapper: typeof SliderWrapper;
	alphaWrapper: typeof SliderWrapper;
	textInput: typeof TextInput;
	a11yNotice: typeof A11yNotice;
	a11ySingleNotice: typeof A11ySingleNotice;
	a11ySummary: typeof A11ySummary;
	input: typeof Input;
	wrapper: typeof Wrapper;
};

export type A11yColor = {
	hex: string;
	reverse?: boolean;
	placeholder?: string;
	size?: 'normal' | 'large';
};

export type A11yColorContract = A11yColor & {
	contrast?: number;
};
