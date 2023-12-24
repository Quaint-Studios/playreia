/**
 * @typedef
 */

/** @typedef {"Desktop" | "Console" | "Mobile"} Tabs */
/**
 * @typedef {{
 *  show: boolean;
 *  showTab(data?: boolean): void;
 *  hideTab(): void;
 *  replay(): Promise<void>;
 * }} TabDataType
 */
/**
 * @typedef {{
 *  Desktop?: TabDataType,
 *  Console?: TabDataType,
 *  Mobile?: TabDataType
 * }} TabData
 */

/**
 * @typedef {{
 *  'title': string,
 *  'image'?: string,
 *  'imageAlt'?: string,
 *  'imageTitle'?: string,
 *  'url': string,
 *  'preview': string
 * }} BlogItem
 */
