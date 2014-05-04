intl-quotes
===========

Small CSS file that correctly sets quotation marks for many different languages.

The stylesheet will make sure that all the quotes will look typographically correct no matter which language is your web content.

Example source code
-------------------

```html
<div lang="cs">
	<q>Quoted text in Czech. Supports <q>secondary nested quotes</q> as well.</q>
</div>

<div lang="fr">
	<q>Quoted text in French. Supports <q>secondary nested quotes</q> as well.</q>
</div>

<div lang="en-US">
	<q>Quoted text in English (US). Supports <q>secondary nested quotes</q> as well.</q>
</div>
```

Output
------

&bdquo;Quoted text in Czech. Supports &sbquo;secondary nested quotes&lsquo; as well.&ldquo;

&laquo;&#8197;Quoted text in French. Supports &ldquo;secondary nested quotes&rdquo; as well.&#8197;&raquo;

&ldquo;Quoted text in English (US). Supports &lsquo;secondary nested quotes&rsquo; as well.&rdquo;

Supported languages
-------------------

Currently supported languages are:

Afrikaans, Albanian, Arabic, Armenian, Azerbaijani, Basque, Belarusian, Bulgarian, Catalan, Chinese, Chinese (simplified), Chinese (traditional), Croatian, Czech, Danish, Dutch, English, English (British), English (Canada), English (US), Esperanto, Estonian, Filipino, Finnish, French, French (Swiss), Georgian, German, German (Swiss), Greek, Hebrew, Hungarian, Icelandic, Indonesian, Interlingua, Irish, Italian, Italian (Swiss), Japanese, Korean, Latvian, Lithuanian, Lojban, Macedonian, Norwegian, Persian, Polish, Portuguese, Portuguese (Brazil), Romanian, Russian, Serbian, Slovak, Slovene, Sorbian, Spanish, Swedish, Thai, Turkish, Ukrainian, Vietnamese, Welsh

The correct quotation marks are took straight from Wikipedia:
http://en.wikipedia.org/wiki/International_variation_in_quotation_marks

Contributing
------------

If you find any mistake, error, or you miss some supported language, please contribute.
