export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  metaDescription: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-create-gmail-filters",
    title: "How to Create Gmail Filters: The Complete Guide for 2026",
    excerpt:
      "Learn every method for creating Gmail filters — from the manual Settings approach to one-click Chrome extensions that save you minutes per filter.",
    date: "2026-03-03",
    readingTime: "6 min read",
    metaDescription:
      "Step-by-step guide to creating Gmail filters in 2026. Learn the manual method through Settings, search-based shortcuts, and one-click browser extensions.",
    content: `
<p>If you get more than a handful of emails a day, Gmail filters are your best friend. They let you automatically label, archive, delete, or forward messages based on rules you define — and once set up, they work silently in the background forever.</p>

<p>This guide covers every way to create a Gmail filter in 2026, from the built-in Settings panel to faster alternatives you might not know about.</p>

<h2>What Is a Gmail Filter?</h2>

<p>A Gmail filter is an automated rule that tells Gmail what to do with incoming messages that match certain criteria. You can match on sender address, subject line, keywords, attachment presence, size, and more. When a new email matches your rule, Gmail applies the action you chose — skip the inbox, apply a label, mark as read, delete it, forward it, or even star it.</p>

<p>Filters only apply to <strong>new</strong> incoming mail by default, but you can optionally apply them to existing conversations that already match.</p>

<h2>Method 1: Create a Filter from Gmail Settings</h2>

<p>This is the "official" way Google documents. It works, but it takes quite a few clicks.</p>

<ol>
  <li>Open Gmail and click the <strong>gear icon</strong> in the top-right corner.</li>
  <li>Click <strong>See all settings</strong>.</li>
  <li>Go to the <strong>Filters and Blocked Addresses</strong> tab.</li>
  <li>Click <strong>Create a new filter</strong>.</li>
  <li>Enter your criteria — for example, type an email address in the <strong>From</strong> field.</li>
  <li>Click <strong>Create filter</strong>.</li>
  <li>Choose an action: Skip Inbox, Apply label, Delete it, Mark as read, and so on.</li>
  <li>Optionally check <strong>Also apply filter to matching conversations</strong>.</li>
  <li>Click <strong>Create filter</strong> again to save.</li>
</ol>

<p>That is nine steps minimum — and if you need to create filters for multiple senders, you repeat the whole process each time.</p>

<h2>Method 2: Create a Filter from the Search Bar</h2>

<p>A slightly faster path that many users overlook:</p>

<ol>
  <li>Click the <strong>filter icon</strong> (Show search options) in the Gmail search bar.</li>
  <li>Fill in the criteria (From, To, Subject, Has the words, etc.).</li>
  <li>Click <strong>Create filter</strong> at the bottom of the search dropdown.</li>
  <li>Choose your action and save.</li>
</ol>

<p>This shaves off a few clicks because you skip the Settings page entirely. But you still have to navigate a multi-step form and type the sender address manually.</p>

<h2>Method 3: Create a Filter from an Existing Email</h2>

<p>If you already have an email from the sender you want to filter:</p>

<ol>
  <li>Open the email.</li>
  <li>Click the <strong>three-dot menu</strong> (More) in the top-right of the message.</li>
  <li>Select <strong>Filter messages like these</strong>.</li>
  <li>Gmail pre-fills the From field with the sender's address.</li>
  <li>Click <strong>Create filter</strong>, choose your action, and save.</li>
</ol>

<p>This is the fastest built-in method because Gmail auto-fills the sender for you. Still, you bounce through a settings overlay and multiple confirmation steps.</p>

<h2>Method 4: One-Click Filtering with a Chrome Extension</h2>

<p>If you find yourself creating filters regularly, the manual methods start to feel tedious. That's where <a href="https://gmailfiltermanager.com">Gmail Filter Manager</a> comes in — it's a free Chrome extension that lets you create filters without ever leaving your inbox.</p>

<p>Here is how it works:</p>

<ol>
  <li>Select one or more emails in your inbox by checking their boxes.</li>
  <li>Click the Gmail Filter Manager icon that appears.</li>
  <li>Choose an action — archive, delete, mark as read, label, or a combination.</li>
  <li>Click once to create the filter.</li>
</ol>

<p>The extension creates a real Gmail filter using the official Gmail API, so it behaves exactly like the ones you'd make through Settings. The difference is speed: what used to take nine steps now takes two or three. It also offers the option to apply the filter to existing matching emails, so you can clean up your inbox and protect it going forward in a single action.</p>

<h2>Filter Criteria You Should Know</h2>

<p>No matter which method you use, understanding the available criteria makes your filters more powerful:</p>

<ul>
  <li><strong>From:</strong> Match a specific sender or domain (e.g., <code>*@linkedin.com</code>).</li>
  <li><strong>To:</strong> Useful if you have multiple aliases or use the plus-addressing trick (<code>you+newsletters@gmail.com</code>).</li>
  <li><strong>Subject:</strong> Match keywords in the subject line.</li>
  <li><strong>Has the words / Doesn't have:</strong> Full-text search inside the email body.</li>
  <li><strong>Size:</strong> Filter emails larger or smaller than a threshold — great for catching attachment-heavy messages.</li>
  <li><strong>Has attachment:</strong> Isolate emails with files attached.</li>
</ul>

<h2>Tips for Effective Gmail Filters</h2>

<ul>
  <li><strong>Use domain-level filters</strong> to catch all mail from a company, not just one address. Filter <code>from:*@company.com</code> instead of a single <code>noreply@company.com</code>.</li>
  <li><strong>Combine criteria</strong> for precision. A filter that matches both a sender and a subject keyword is less likely to accidentally catch important mail.</li>
  <li><strong>Audit your filters periodically.</strong> Visit Settings &gt; Filters and Blocked Addresses once a quarter to remove outdated rules.</li>
  <li><strong>Use "Also apply to existing conversations"</strong> to retroactively clean up when you create a new filter. Gmail Filter Manager surfaces this option as a simple checkbox.</li>
  <li><strong>Stack actions.</strong> A single filter can skip the inbox, apply a label, <em>and</em> mark as read — use all three together for newsletters you want to keep but not be interrupted by.</li>
</ul>

<h2>When to Use Which Method</h2>

<p>For a one-off filter you will rarely touch again, the built-in Gmail methods are fine. But if you are triaging your inbox and want to quickly filter five or ten senders in a row, the extension approach is dramatically faster. Since <a href="https://gmailfiltermanager.com">Gmail Filter Manager</a> is open-source and processes everything locally in your browser, there is no privacy trade-off — your data never leaves your machine.</p>

<p>Whichever path you choose, the important thing is to start. Even a handful of well-placed filters can cut the noise in your inbox by half and help you focus on the emails that actually matter.</p>
`,
  },
  {
    slug: "bulk-delete-emails-gmail",
    title: "How to Bulk Delete Emails in Gmail by Sender",
    excerpt:
      "Tired of deleting the same sender's emails one page at a time? Here are the fastest ways to bulk-remove messages and stop them from coming back.",
    date: "2026-03-05",
    readingTime: "6 min read",
    metaDescription:
      "Learn how to bulk delete emails in Gmail by sender, domain, or keyword. Covers native Gmail search, Select All, and filter-based methods to stop future emails too.",
    content: `
<p>You open Gmail and realize you have 4,000 unread emails from a retailer you bought socks from three years ago. Sound familiar? Bulk deleting emails in Gmail is not as intuitive as it should be, and the built-in tools have some notable limitations. This guide walks through every method — from the quick-and-dirty to the permanent fix.</p>

<h2>The Problem with Gmail's Built-In Bulk Delete</h2>

<p>Gmail shows 50 conversations per page by default (100 if you change the setting). When you click the "Select all" checkbox at the top, it only selects the conversations on the <em>current page</em>. If you have thousands of emails from a sender, you would need to repeat the process dozens of times.</p>

<p>Gmail does offer a "Select all conversations that match this search" link that appears after you select all visible messages, but many users miss it — and it has its own quirks.</p>

<h2>Method 1: Search and Select All</h2>

<p>The fastest native approach:</p>

<ol>
  <li>In the Gmail search bar, type <code>from:sender@example.com</code> and press Enter.</li>
  <li>Click the <strong>checkbox</strong> at the top-left to select all conversations on this page.</li>
  <li>Look for the yellow banner that says <strong>"Select all conversations that match this search"</strong> and click it.</li>
  <li>Click the <strong>trash icon</strong> (or press <code>#</code>) to delete.</li>
  <li>Confirm the bulk action.</li>
</ol>

<p>This works for any search query, not just sender. You can use <code>from:*@domain.com</code> to target an entire domain, or combine with <code>before:2025/01/01</code> to only delete old messages.</p>

<h3>Limitations</h3>

<ul>
  <li>Gmail sometimes caps the batch at a few thousand conversations and you need to run the search again for the remainder.</li>
  <li>Deleted emails go to Trash, which auto-empties after 30 days. To free space immediately, go to Trash and click "Empty Trash now."</li>
  <li>This method does <strong>nothing to stop future emails</strong> from the same sender.</li>
</ul>

<h2>Method 2: Archive Instead of Delete</h2>

<p>If you do not want to permanently lose the emails but want them out of your inbox:</p>

<ol>
  <li>Search for the sender as described above.</li>
  <li>Select all matching conversations.</li>
  <li>Click the <strong>Archive</strong> button (the box with the down arrow).</li>
</ol>

<p>Archived mail is still searchable and lives under "All Mail." This is a good choice for receipts or order confirmations you might need later but don't want cluttering your inbox.</p>

<h2>Method 3: Filter + Delete (the Permanent Fix)</h2>

<p>Deleting existing emails solves the symptom. Creating a filter solves the <em>cause</em>. A filter-based approach handles both at once:</p>

<ol>
  <li>Create a filter that matches the sender (using any of the methods described in our <a href="/blog/how-to-create-gmail-filters">guide to creating Gmail filters</a>).</li>
  <li>Set the action to <strong>Delete it</strong> (or Skip Inbox + Mark as Read, if you prefer archiving).</li>
  <li>Check the option to <strong>apply the filter to existing matching conversations</strong>.</li>
</ol>

<p>Now Gmail deletes every existing email from that sender <em>and</em> automatically trashes any new ones that arrive. This is the "set it and forget it" approach.</p>

<h3>Doing This Faster with Gmail Filter Manager</h3>

<p>If you are cleaning up multiple senders at once, creating filters through Gmail Settings one by one gets tedious. <a href="https://gmailfiltermanager.com">Gmail Filter Manager</a> streamlines the process: select the offending emails right in your inbox, choose "Delete," and it creates the filter and applies it to existing messages in one step. Since the extension uses Gmail's own API, the filters it creates are identical to the ones you would make manually — they just take a fraction of the time to set up.</p>

<h2>Method 4: Using Gmail's "Block" Feature</h2>

<p>Gmail has a built-in block option:</p>

<ol>
  <li>Open an email from the sender.</li>
  <li>Click the three-dot menu next to the reply button.</li>
  <li>Select <strong>Block "Sender Name"</strong>.</li>
</ol>

<p>Blocking a sender automatically creates a filter that sends their future messages to Spam. However, it does <strong>not</strong> delete existing emails from that sender — you still need to do that separately. And messages land in Spam rather than Trash, so they stick around for 30 days and can still appear in search results.</p>

<h2>Cleaning Up by Domain</h2>

<p>Sometimes the noise comes from an entire company that sends from multiple addresses (marketing@, noreply@, support@, promotions@). Instead of filtering each address individually, use a domain-level search:</p>

<p><code>from:*@company.com</code></p>

<p>Select all matching conversations and delete or archive them. If you create a domain-level filter, it catches every address at that domain going forward. Check out our <a href="/blog/gmail-filter-wildcards-domain">wildcard filter guide</a> for more details on domain filtering.</p>

<h2>How to Free Up Storage After Bulk Deleting</h2>

<p>Deleting emails does not immediately free Google storage. Here is the timeline:</p>

<ul>
  <li><strong>Trash:</strong> Auto-empties after 30 days. Go to Trash and click "Empty Trash now" to reclaim space immediately.</li>
  <li><strong>Spam:</strong> Auto-empties after 30 days as well.</li>
  <li><strong>Storage update:</strong> Google may take up to 24 hours to reflect the freed storage in your account quota.</li>
</ul>

<h2>A Strategy for Ongoing Inbox Hygiene</h2>

<p>Bulk deleting is a one-time fix. To keep your inbox clean long-term:</p>

<ol>
  <li><strong>Filter as you go.</strong> When a new unwanted sender appears, create a filter immediately rather than just deleting the email.</li>
  <li><strong>Use domain-level filters</strong> for companies that send from multiple addresses.</li>
  <li><strong>Review your filters quarterly.</strong> Some filters may no longer be relevant — for example, a filter for a service you canceled.</li>
  <li><strong>Combine filters with labels.</strong> Instead of deleting everything, consider labeling low-priority mail and skipping the inbox. This keeps messages searchable without the clutter.</li>
</ol>

<p>The key insight is that deleting emails is reactive, while filtering is proactive. Tools like <a href="https://gmailfiltermanager.com">Gmail Filter Manager</a> make the proactive approach nearly as fast as the reactive one, so there is little reason not to filter as you clean.</p>
`,
  },
  {
    slug: "gmail-inbox-zero",
    title: "Gmail Inbox Zero: A Practical Guide That Actually Works",
    excerpt:
      "Inbox Zero is not about having zero emails — it's about having zero unprocessed emails. Here's a realistic system for getting there and staying there.",
    date: "2026-03-07",
    readingTime: "7 min read",
    metaDescription:
      "A practical, no-nonsense guide to achieving Inbox Zero in Gmail. Covers triage strategies, filter automation, label systems, and tools that help you stay at zero.",
    content: `
<p>The concept of Inbox Zero was coined by productivity writer Merlin Mann back in 2007. Nearly two decades later, it is still the gold standard for email management — yet most people have never achieved it, let alone maintained it. The problem is not willpower. The problem is that most Inbox Zero advice skips the practical "how" and jumps straight to "just process everything."</p>

<p>This guide is different. It gives you a concrete system for Gmail that you can set up in an afternoon and maintain with minimal daily effort.</p>

<h2>What Inbox Zero Actually Means</h2>

<p>Inbox Zero does <strong>not</strong> mean you have zero emails in your account. It means your inbox — the landing zone — has zero emails that you haven't made a decision about. Every message has been read, replied to, delegated, deferred, or deleted. The inbox is a processing queue, not a storage unit.</p>

<h2>Step 1: The Initial Purge</h2>

<p>If you have thousands of emails in your inbox right now, do not try to process them one by one. That way lies madness. Instead, do a triage pass:</p>

<ol>
  <li><strong>Archive everything older than two weeks.</strong> Search <code>in:inbox before:2026/03/01</code> (adjust the date), select all, and archive. If something in there was truly urgent, the sender would have followed up by now.</li>
  <li><strong>Bulk-filter the obvious noise.</strong> Search for senders that are clearly promotional or automated. Create filters to handle them going forward (archive, label, or delete) and apply those filters to existing messages. Our <a href="/blog/bulk-delete-emails-gmail">bulk delete guide</a> covers this in detail.</li>
  <li><strong>Process the remainder.</strong> You should now have a manageable number of recent emails. Go through each one and make a quick decision (more on that below).</li>
</ol>

<h2>Step 2: Set Up Your Filter Safety Net</h2>

<p>Filters are the backbone of a sustainable Inbox Zero practice. Without them, you are manually triaging the same types of emails every single day. Here are the filters you should create first:</p>

<ul>
  <li><strong>Newsletters:</strong> Filter all newsletter senders to skip the inbox and apply a "Newsletters" label. Read them when you have downtime, not when they arrive.</li>
  <li><strong>Notifications:</strong> Social media notifications, app alerts, and service updates. Archive automatically; label if you want to review them later.</li>
  <li><strong>Receipts and confirmations:</strong> Order confirmations, shipping updates, payment receipts. Label as "Receipts" and skip the inbox.</li>
  <li><strong>Internal noise:</strong> If you use Gmail for work, filter mailing lists, automated CI/CD notifications, and calendar responses.</li>
</ul>

<p>Creating these one by one through Gmail Settings is time-consuming. <a href="https://gmailfiltermanager.com">Gmail Filter Manager</a> makes it faster — you can select a batch of newsletter emails directly in your inbox and create a filter with a couple of clicks, including retroactively applying it to existing messages. However you set them up, the important thing is to get these filters in place before you worry about daily habits.</p>

<h2>Step 3: The Daily Processing Routine</h2>

<p>With your filters in place, far fewer emails will land in your actual inbox. For the ones that do, adopt the "two-minute rule" popularized by David Allen's Getting Things Done:</p>

<ol>
  <li><strong>If it takes less than two minutes, do it now.</strong> Reply, click the link, approve the request — whatever it is, just handle it.</li>
  <li><strong>If it requires more time, defer it.</strong> Star the email or snooze it to a specific date. Get it out of your inbox but keep it on your radar.</li>
  <li><strong>If it is someone else's responsibility, forward it</strong> and archive the original.</li>
  <li><strong>If it requires no action, archive it.</strong> Don't let "read but not actionable" emails sit in your inbox.</li>
  <li><strong>If it is unwanted, filter it.</strong> Don't just delete it — create a filter so you never see emails like it again.</li>
</ol>

<p>Step five is where most people fall short. Deleting an email is easy but temporary. Filtering it takes 30 extra seconds but saves you from deleting the same type of email for the rest of time.</p>

<h2>Step 4: The Label System</h2>

<p>Gmail labels are more flexible than folders because an email can have multiple labels. A simple label system for Inbox Zero:</p>

<ul>
  <li><strong>@Action</strong> — things you need to do (prefix with @ so it sorts to the top).</li>
  <li><strong>@Waiting</strong> — things you are waiting on someone else for.</li>
  <li><strong>Newsletters</strong> — auto-applied by filters.</li>
  <li><strong>Receipts</strong> — auto-applied by filters.</li>
  <li><strong>Projects/[Name]</strong> — nested labels for ongoing projects or clients.</li>
</ul>

<p>Read our <a href="/blog/gmail-filters-vs-labels">Filters vs. Labels guide</a> for a deeper dive on using these two features together.</p>

<h2>Step 5: Schedule Your Email Time</h2>

<p>Inbox Zero is not about checking email constantly. In fact, constant checking is the enemy. Pick two or three times per day to process your inbox:</p>

<ul>
  <li><strong>Morning:</strong> Quick scan for anything urgent that came in overnight.</li>
  <li><strong>Midday:</strong> Full processing pass — reply, defer, archive, filter.</li>
  <li><strong>End of day:</strong> Final sweep to clear anything that came in during the afternoon.</li>
</ul>

<p>Outside these windows, close the Gmail tab. Turn off notifications. The point of Inbox Zero is to reduce the mental overhead of email, and that only works if email is not a constant background interruption.</p>

<h2>Maintaining Zero: Weekly Review</h2>

<p>Once a week, spend ten minutes on email hygiene:</p>

<ol>
  <li><strong>Review starred/snoozed items.</strong> Are any of them stale? Handle them or let them go.</li>
  <li><strong>Check your @Waiting label.</strong> Follow up on anything that has been waiting too long.</li>
  <li><strong>Scan your Newsletters label.</strong> If you have not read a newsletter in a month, create a filter to delete it and unsubscribe.</li>
  <li><strong>Glance at new senders.</strong> Any new source of noise? Create a filter now rather than waiting.</li>
</ol>

<h2>Common Mistakes</h2>

<ul>
  <li><strong>Using your inbox as a to-do list.</strong> Your inbox is a processing queue. Move actionable items to a task manager or use Gmail's starred/snoozed features to get them out of the inbox.</li>
  <li><strong>Only deleting, never filtering.</strong> Every time you delete a recurring email without creating a filter, you are choosing to do that work again in the future.</li>
  <li><strong>Over-engineering labels.</strong> Start simple. You can always add more labels later. Five to ten labels is plenty for most people.</li>
  <li><strong>Trying to process old mail.</strong> Archive the backlog. Do not spend hours on emails from 2024. Start fresh.</li>
</ul>

<h2>Getting Started Today</h2>

<p>You do not need a perfect system to start. The most important step is the initial purge: archive old mail, create a handful of filters for your noisiest senders, and commit to processing your inbox to zero once a day. Tools like <a href="https://gmailfiltermanager.com">Gmail Filter Manager</a> can speed up the filter-creation step, but even using Gmail's built-in methods works if you actually do it. The system only fails when you stop using it — so start simple and build from there.</p>
`,
  },
  {
    slug: "block-emails-gmail",
    title: "How to Block Emails on Gmail: Every Method Explained",
    excerpt:
      "Gmail gives you several ways to stop unwanted emails. Here's what each method actually does — and which one to use depending on your situation.",
    date: "2026-03-09",
    readingTime: "6 min read",
    metaDescription:
      "Complete guide to blocking emails in Gmail. Covers Gmail's Block button, filter-to-trash, filter-to-archive, domain blocking, unsubscribe, and third-party tools.",
    content: `
<p>Getting unwanted emails is annoying. Getting the <em>same</em> unwanted emails repeatedly is infuriating. Gmail offers several ways to block senders and stop unwanted messages, but each method works differently. This guide explains every option so you can pick the right one for your situation.</p>

<h2>Method 1: Gmail's Built-In Block Button</h2>

<p>The simplest option and the one most people know about:</p>

<ol>
  <li>Open an email from the sender you want to block.</li>
  <li>Click the <strong>three-dot menu</strong> next to the Reply button.</li>
  <li>Select <strong>Block "[Sender Name]"</strong>.</li>
</ol>

<h3>What it actually does</h3>
<p>Gmail creates a filter behind the scenes that sends all future messages from that sender to <strong>Spam</strong>. The messages are not deleted — they land in your Spam folder, where they sit for 30 days before being automatically removed.</p>

<h3>Pros</h3>
<ul>
  <li>Fast — two clicks from an open email.</li>
  <li>Easy to undo (three-dot menu → Unblock).</li>
</ul>

<h3>Cons</h3>
<ul>
  <li>Only blocks the exact sender address, not the whole domain.</li>
  <li>Does not remove existing emails from that sender.</li>
  <li>Messages go to Spam, not Trash — they are still technically in your account.</li>
  <li>Spam filters can occasionally let blocked messages through.</li>
</ul>

<h2>Method 2: Create a Filter to Trash</h2>

<p>For a more aggressive block, create a Gmail filter that automatically deletes the messages:</p>

<ol>
  <li>Go to Settings → Filters and Blocked Addresses → Create a new filter.</li>
  <li>Enter the sender's address in the <strong>From</strong> field.</li>
  <li>Click <strong>Create filter</strong>.</li>
  <li>Check <strong>Delete it</strong>.</li>
  <li>Optionally check <strong>Also apply filter to matching conversations</strong> to remove existing emails too.</li>
  <li>Click <strong>Create filter</strong>.</li>
</ol>

<h3>What it actually does</h3>
<p>Future messages from that sender skip the inbox entirely and go straight to Trash. Unlike Spam, Trash items are removed after 30 days and don't appear in your Spam folder at all.</p>

<h3>Why this is often better than Block</h3>
<ul>
  <li>Trash is cleaner than Spam — no risk of the message "escaping" spam filters.</li>
  <li>You can apply it to existing messages to clean up retroactively.</li>
  <li>You can filter an entire domain, not just one address.</li>
</ul>

<h2>Method 3: Filter to Archive (Silent Block)</h2>

<p>Sometimes you don't want to delete emails, but you don't want them in your inbox either. This is common for mailing lists, CC'd conversations, or senders whose emails you might need later but don't want to see every day.</p>

<ol>
  <li>Create a filter for the sender.</li>
  <li>Check <strong>Skip the Inbox (Archive it)</strong> and optionally <strong>Mark as read</strong>.</li>
</ol>

<p>The emails still exist in your account under "All Mail" and are fully searchable, but they never appear in your inbox. This is not technically "blocking," but it achieves the same result from a daily workflow perspective.</p>

<h2>Method 4: Domain-Level Blocking</h2>

<p>Companies often send from multiple addresses: marketing@, noreply@, support@, promotions@, and so on. Blocking one address does not stop the others. To block an entire domain:</p>

<ol>
  <li>Create a filter with <code>*@domain.com</code> in the From field.</li>
  <li>Set your preferred action (Delete, Archive, etc.).</li>
</ol>

<p>This catches every email address at that domain. See our <a href="/blog/gmail-filter-wildcards-domain">wildcard filter guide</a> for more details on domain-level filtering and edge cases to watch for.</p>

<h2>Method 5: Unsubscribe</h2>

<p>For legitimate marketing emails and newsletters, unsubscribing is the cleanest solution:</p>

<ol>
  <li>Open the email.</li>
  <li>Click the <strong>Unsubscribe</strong> link next to the sender's name at the top of the email (Gmail surfaces this automatically for many senders).</li>
  <li>Alternatively, scroll to the bottom of the email and look for an unsubscribe link in the fine print.</li>
</ol>

<h3>When unsubscribe works well</h3>
<p>Reputable companies (retailers, SaaS products, newsletters from real publishers) generally honor unsubscribe requests within a few days. This is required by law in most jurisdictions (CAN-SPAM in the US, GDPR in the EU).</p>

<h3>When it does not</h3>
<p>Shady senders may ignore unsubscribe requests or even use the click to confirm your email is active. For these senders, a filter-to-trash approach is more reliable.</p>

<h2>Method 6: One-Click Blocking with a Chrome Extension</h2>

<p><a href="https://gmailfiltermanager.com">Gmail Filter Manager</a> combines the speed of Gmail's Block button with the power of a filter. Select emails in your inbox, choose an action (delete, archive, label), and the extension creates a real Gmail filter that handles both existing and future messages.</p>

<p>This is especially useful when you're triaging your inbox and want to block several senders in a row. Instead of opening each email, finding the three-dot menu, and clicking Block — then separately searching for and deleting existing emails — you handle everything in a single step per sender.</p>

<h2>Which Method Should You Use?</h2>

<p>Here is a quick decision tree:</p>

<ul>
  <li><strong>Legitimate newsletter you just don't want?</strong> Unsubscribe first. If emails keep coming, create a filter.</li>
  <li><strong>One-off unwanted sender?</strong> Gmail's Block button is fine.</li>
  <li><strong>Persistent sender you want completely gone?</strong> Filter to Trash with "apply to existing conversations."</li>
  <li><strong>Entire company/domain sending from multiple addresses?</strong> Domain-level filter.</li>
  <li><strong>Emails you might need but don't want in your inbox?</strong> Filter to Archive + Mark as Read.</li>
  <li><strong>Bulk blocking multiple senders at once?</strong> Use a tool like <a href="https://gmailfiltermanager.com">Gmail Filter Manager</a> to speed up the process.</li>
</ul>

<h2>Managing Your Block List</h2>

<p>Over time, you may accumulate a long list of blocked senders and filters. To review them:</p>

<ol>
  <li>Go to Gmail Settings → <strong>Filters and Blocked Addresses</strong>.</li>
  <li>You will see all your active filters listed. Each one shows its criteria and action.</li>
  <li>Click <strong>edit</strong> to modify a filter or <strong>delete</strong> to remove it.</li>
</ol>

<p>It is worth reviewing this list every few months. You may find filters for services you no longer use, or discover you are blocking a sender you actually want to hear from now.</p>

<p>The best approach to email blocking is proactive: when a new unwanted email appears, don't just delete it — create a filter immediately. Those 30 seconds of upfront effort save you from dealing with that sender's emails indefinitely.</p>
`,
  },
  {
    slug: "gmail-filters-vs-labels",
    title: "Gmail Filters vs Labels: How to Use Them Together",
    excerpt:
      "Filters automate. Labels organize. Here's how to use both features together to build a Gmail workflow that practically runs itself.",
    date: "2026-03-11",
    readingTime: "6 min read",
    metaDescription:
      "Understand the difference between Gmail filters and labels, and learn how to combine them for an automated, organized inbox. Includes practical examples and setup tips.",
    content: `
<p>Gmail filters and Gmail labels are two of the most powerful features in Gmail, but they serve very different purposes. Many people use one without the other, which means they are only getting half the benefit. This guide explains what each does, how they differ, and — most importantly — how to combine them into a system that keeps your inbox organized with minimal effort.</p>

<h2>What Are Gmail Labels?</h2>

<p>Labels are Gmail's version of folders — with a crucial difference. In a traditional folder system (like Outlook), an email can only live in one folder. In Gmail, an email can have <strong>multiple labels</strong> simultaneously. An email can be labeled "Work," "Project-X," and "Invoices" all at once.</p>

<p>Labels appear in the left sidebar. You can:</p>

<ul>
  <li>Click a label to see all emails tagged with it.</li>
  <li>Nest labels (e.g., "Clients/Acme Corp" under a "Clients" parent).</li>
  <li>Color-code labels for visual scanning.</li>
  <li>Hide labels from the sidebar if you don't need them visible all the time.</li>
</ul>

<h3>How to create a label</h3>
<ol>
  <li>In the left sidebar, scroll down and click <strong>More</strong>.</li>
  <li>Click <strong>Create new label</strong>.</li>
  <li>Enter a name and optionally nest it under an existing label.</li>
</ol>

<p>You can also apply labels manually: select one or more emails, click the label icon in the toolbar, and check the labels you want to apply.</p>

<h2>What Are Gmail Filters?</h2>

<p>Filters are automation rules. A filter watches every incoming email and, if it matches your criteria, automatically performs one or more actions. Available actions include:</p>

<ul>
  <li>Skip the Inbox (Archive it)</li>
  <li>Mark as read</li>
  <li>Star it</li>
  <li>Apply a label</li>
  <li>Forward it</li>
  <li>Delete it</li>
  <li>Never send it to Spam</li>
  <li>Mark as important / Never mark as important</li>
  <li>Categorize as (Primary, Social, Promotions, Updates, Forums)</li>
</ul>

<p>Filters match on criteria like sender address, recipient, subject, keywords, size, and attachment presence. For a full walkthrough on creating filters, see our <a href="/blog/how-to-create-gmail-filters">complete guide to Gmail filters</a>.</p>

<h2>Filters vs Labels: The Key Difference</h2>

<p>The distinction is simple:</p>

<ul>
  <li><strong>Labels</strong> are tags you apply to emails — they organize.</li>
  <li><strong>Filters</strong> are rules that perform actions automatically — they automate.</li>
</ul>

<p>A label on its own does nothing except categorize an email. A filter on its own can do many things but doesn't help you find emails later if it just archives or deletes them without labeling. The real power comes from combining both.</p>

<h2>How to Use Filters and Labels Together</h2>

<p>The best email workflow uses filters to automatically apply labels while also taking other actions. Here are practical examples:</p>

<h3>Example 1: Newsletter triage</h3>
<p>Create a filter that matches your newsletter senders:</p>
<ul>
  <li><strong>Criteria:</strong> <code>from:newsletter@example.com OR from:digest@another.com</code></li>
  <li><strong>Actions:</strong> Skip Inbox, Apply label "Newsletters", Mark as read</li>
</ul>
<p>Result: Newsletters never clutter your inbox but are neatly collected under a "Newsletters" label for weekend reading.</p>

<h3>Example 2: Client emails that need attention</h3>
<ul>
  <li><strong>Criteria:</strong> <code>from:*@importantclient.com</code></li>
  <li><strong>Actions:</strong> Apply label "Clients/Important Client", Star it, Never send to Spam</li>
</ul>
<p>Result: Client emails stay in your inbox (so you see them immediately), get starred for visibility, and are labeled for easy filtering later.</p>

<h3>Example 3: Receipts and transactional emails</h3>
<ul>
  <li><strong>Criteria:</strong> <code>subject:(receipt OR "order confirmation" OR "payment received")</code></li>
  <li><strong>Actions:</strong> Skip Inbox, Apply label "Receipts", Mark as read</li>
</ul>
<p>Result: You have a clean archive of every receipt, instantly findable under the Receipts label, but none of them interrupt your day.</p>

<h3>Example 4: Team updates you want to batch-read</h3>
<ul>
  <li><strong>Criteria:</strong> <code>list:team-updates@company.com</code></li>
  <li><strong>Actions:</strong> Skip Inbox, Apply label "Team Updates"</li>
</ul>
<p>Result: You check the "Team Updates" label at set times instead of being interrupted by each message.</p>

<h2>Building a Label System</h2>

<p>Before creating filters, decide on a label structure. Here is a proven starting point:</p>

<ul>
  <li><strong>@Action</strong> — emails you need to act on (the @ prefix sorts it to the top).</li>
  <li><strong>@Waiting</strong> — things you're waiting on a reply for.</li>
  <li><strong>Newsletters</strong> — all newsletters, auto-applied by filters.</li>
  <li><strong>Receipts</strong> — purchase confirmations and invoices.</li>
  <li><strong>Notifications</strong> — social media, app alerts, service pings.</li>
  <li><strong>Clients/[Name]</strong> — nested labels per client or project.</li>
</ul>

<p>Keep it simple. You can always add labels later, but it is hard to simplify an over-complicated system. Five to ten top-level labels are enough for most people.</p>

<h2>Setting Up Filters Efficiently</h2>

<p>Creating filters one at a time through Gmail Settings works, but it is slow if you need to create many. Some faster approaches:</p>

<ul>
  <li><strong>From search results:</strong> Search for a sender, click the filter icon in the search bar, and create a filter directly from the search criteria.</li>
  <li><strong>From an email:</strong> Open an email → three-dot menu → "Filter messages like these."</li>
  <li><strong>With Gmail Filter Manager:</strong> <a href="https://gmailfiltermanager.com">The extension</a> lets you select emails in your inbox and create filters with a couple of clicks — including applying labels. This is the fastest option when you are setting up a new label-and-filter system for the first time.</li>
</ul>

<h2>Tips for a Clean System</h2>

<ul>
  <li><strong>Color your labels.</strong> Right-click a label in the sidebar → Label color. Use red for action items, green for informational, blue for projects, and so on.</li>
  <li><strong>Hide labels you don't check often.</strong> Go to Settings → Labels and set rarely-used labels to "Show if unread" or "Hide." This keeps your sidebar clean.</li>
  <li><strong>Use nested labels for grouping.</strong> "Clients" as a parent with "Clients/Acme" and "Clients/Globex" as children is far tidier than separate top-level labels for each client.</li>
  <li><strong>Combine filter actions.</strong> A single filter can skip the inbox, apply a label, and mark as read — use all three together for maximum automation.</li>
  <li><strong>Review quarterly.</strong> Check Settings → Filters and remove any that match senders who no longer email you. Check your labels and merge or delete any you've stopped using.</li>
</ul>

<h2>The Bottom Line</h2>

<p>Labels and filters are not competing features — they are complementary. Labels give you the organization layer; filters give you the automation layer. Use them together and your inbox essentially sorts itself. The upfront investment of creating a handful of filters and labels pays for itself within a week, and once set up, the system requires almost no maintenance beyond an occasional review.</p>
`,
  },
  {
    slug: "email-overload-productivity",
    title:
      "Email Overload Is Killing Your Productivity — Here's How to Fix It",
    excerpt:
      "The average professional spends 28% of their workweek on email. Here are research-backed strategies to take back your time without missing anything important.",
    date: "2026-03-13",
    readingTime: "7 min read",
    metaDescription:
      "Email overload costs the average worker 2.5 hours per day. Learn proven strategies to reduce email time, automate triage, and reclaim your focus and productivity.",
    content: `
<p>Here is a number that should make you uncomfortable: the average professional spends <strong>28% of their workweek</strong> reading, writing, and managing email. That is over 11 hours per week, or roughly 2.5 hours every workday, according to a McKinsey Global Institute analysis. For most people, email is the single largest consumer of work time after their actual job function.</p>

<p>The problem is not that email exists. It is that most of us use our inbox as a combination todo list, filing cabinet, communication channel, and notification feed — all in one overwhelmed tab. This guide covers research-backed strategies for breaking out of that cycle.</p>

<h2>The Real Cost of Email Overload</h2>

<p>Email overload is not just a time problem. Research from the University of California, Irvine, found that it takes an average of <strong>23 minutes and 15 seconds</strong> to fully regain focus after an interruption. If you check email 15 times a day (the average is actually higher), that context-switching cost alone could account for hours of lost deep work.</p>

<p>Other documented effects of email overload:</p>

<ul>
  <li><strong>Increased stress.</strong> A study published in the International Journal of Human-Computer Studies found that people who checked email less frequently reported significantly lower stress levels.</li>
  <li><strong>Decision fatigue.</strong> Every email you read requires a micro-decision: reply, defer, delete, or ignore. Hundreds of these decisions per day deplete your cognitive resources.</li>
  <li><strong>Reduced quality of work.</strong> When email is a constant background task, deep-focus work suffers. You are never fully present in either your email or your actual work.</li>
</ul>

<h2>Strategy 1: Batch Your Email Processing</h2>

<p>The single most effective change you can make is to stop treating email as a real-time medium. Email is asynchronous by design — it does not require an immediate response, even if it feels like it does.</p>

<p>Set two or three specific times per day to process email:</p>

<ul>
  <li><strong>Morning (9:00 AM):</strong> Quick scan for anything urgent.</li>
  <li><strong>Midday (12:30 PM):</strong> Full processing pass.</li>
  <li><strong>Late afternoon (4:30 PM):</strong> Final sweep and any replies needed before end of day.</li>
</ul>

<p>Outside these windows, <strong>close your email tab</strong> and turn off notifications. If something is truly urgent, people will call or message you directly.</p>

<h2>Strategy 2: Automate the Predictable</h2>

<p>A large percentage of the emails you receive are predictable: newsletters, notifications, receipts, automated reports, social media alerts. You know what they are before you open them. These should never touch your inbox.</p>

<p>Create Gmail filters to automatically:</p>

<ul>
  <li><strong>Archive and label</strong> newsletters for batch reading.</li>
  <li><strong>Delete</strong> notifications you never read (looking at you, LinkedIn endorsements).</li>
  <li><strong>Label and skip inbox</strong> for receipts and order confirmations.</li>
  <li><strong>Mark as read</strong> for informational CC'd emails that don't require your action.</li>
</ul>

<p>If you have not set up filters yet, spend 30 minutes doing it now. Our <a href="/blog/how-to-create-gmail-filters">Gmail filter creation guide</a> walks through every method. For faster setup, <a href="https://gmailfiltermanager.com">Gmail Filter Manager</a> lets you select emails in your inbox and create filters in a couple of clicks — you can set up a dozen filters in the time it takes to create two through Gmail Settings.</p>

<p>The goal is to reduce the number of emails that reach your inbox to only those that actually require human attention. Everything else should be pre-sorted or eliminated.</p>

<h2>Strategy 3: Apply the Four Ds</h2>

<p>When you do sit down to process email, use a simple decision framework for each message. The "Four Ds" system (variants of which appear in Getting Things Done, The 4-Hour Workweek, and other productivity systems):</p>

<ol>
  <li><strong>Do it</strong> — If it takes less than two minutes, handle it immediately.</li>
  <li><strong>Defer it</strong> — If it requires more time, star it or snooze it to a specific time. Get it out of the inbox.</li>
  <li><strong>Delegate it</strong> — If someone else should handle it, forward it with clear instructions and archive the original.</li>
  <li><strong>Delete it</strong> — If it requires no action and has no future value, archive or delete it. And if it is recurring, <strong>create a filter</strong> so you never see it again.</li>
</ol>

<p>The key discipline is making one of these four decisions for every single email during your processing window. Do not read an email and leave it sitting in your inbox — that is the path back to overload.</p>

<h2>Strategy 4: Reduce Incoming Volume</h2>

<p>Filtering helps you manage what you receive, but reducing what you receive in the first place is even better:</p>

<ul>
  <li><strong>Unsubscribe aggressively.</strong> If you have not opened a newsletter in a month, unsubscribe. Gmail surfaces an "Unsubscribe" link at the top of many promotional emails — use it.</li>
  <li><strong>Turn off notifications.</strong> Do you need an email every time someone likes your post or comments on a document? Go into each service's notification settings and turn off everything except the essentials.</li>
  <li><strong>Use direct messaging for quick conversations.</strong> If a topic requires more than two back-and-forth emails, move it to a call, Slack message, or in-person conversation.</li>
  <li><strong>Stop CC'ing (and ask others to stop).</strong> CC is one of the largest sources of unnecessary email in the workplace. Only include people who genuinely need to see the message.</li>
</ul>

<h2>Strategy 5: Write Better Emails (and Get Fewer in Return)</h2>

<p>The emails you send directly influence the emails you receive. Clear, well-structured emails get clear, concise replies. Vague emails generate clarification threads that multiply your inbox load.</p>

<ul>
  <li><strong>Use clear subject lines</strong> that state the purpose: "Approval needed: Q2 budget by Friday" is better than "Quick question."</li>
  <li><strong>Put the action item in the first line.</strong> Don't bury what you need in the fourth paragraph.</li>
  <li><strong>Use bullet points</strong> for multiple items or questions. This makes it easy for the recipient to address each point.</li>
  <li><strong>Specify a deadline</strong> if one exists. "When you get a chance" guarantees a follow-up email from you later.</li>
  <li><strong>End with a clear next step.</strong> "I'll proceed with Option A unless I hear otherwise by Thursday" reduces the need for a reply entirely.</li>
</ul>

<h2>Strategy 6: Protect Deep Work Time</h2>

<p>Email overload is ultimately a focus problem. If you protect your focus time, email naturally falls into its proper place as a supporting task rather than your primary activity.</p>

<ul>
  <li><strong>Block 2-3 hours per day</strong> for deep work on your calendar. Treat this time as sacred — no email, no meetings, no Slack.</li>
  <li><strong>Use "Do Not Disturb" mode</strong> on your devices during focus blocks.</li>
  <li><strong>Communicate your schedule.</strong> Let colleagues know you check email at specific times. Most people are fine with this — they just want to know what to expect.</li>
</ul>

<h2>Measuring Your Progress</h2>

<p>You cannot improve what you do not measure. Track a few simple metrics:</p>

<ul>
  <li><strong>Inbox count at end of day.</strong> Aim for zero or single digits.</li>
  <li><strong>Number of email checks per day.</strong> Aim for three or fewer.</li>
  <li><strong>Time spent per processing session.</strong> Aim for 15-30 minutes. If it's taking longer, you may need more filters.</li>
</ul>

<h2>The One-Week Challenge</h2>

<p>Pick one strategy from this list and implement it for one week. The easiest starting point: spend 30 minutes creating filters for your most common unwanted emails (use <a href="https://gmailfiltermanager.com">Gmail Filter Manager</a> to speed this up). Then commit to processing email only three times per day for a week.</p>

<p>Most people who try this report getting back 45-60 minutes per day — time that goes back into actual work, thinking, or simply not being stressed about an overflowing inbox. Email is a tool. It should serve your work, not consume it.</p>
`,
  },
  {
    slug: "gmail-filter-wildcards-domain",
    title: "Gmail Wildcard Filters: How to Filter Emails by Domain",
    excerpt:
      "Learn how to use wildcard patterns like *@domain.com in Gmail filters to catch every email from a company — plus common gotchas and advanced techniques.",
    date: "2026-03-15",
    readingTime: "6 min read",
    metaDescription:
      "Learn how to create Gmail wildcard filters to block or sort emails by domain. Covers *@domain.com syntax, subdomain handling, common provider gotchas, and advanced patterns.",
    content: `
<p>When you want to filter emails from a specific company, blocking individual email addresses is a losing game. Companies send from dozens of addresses — marketing@, noreply@, support@, alerts@, billing@, and more. The solution is a domain-level wildcard filter that catches <em>every</em> address at that domain in one rule.</p>

<h2>Basic Wildcard Syntax</h2>

<p>Gmail supports the <code>*</code> wildcard character in filter criteria. To filter all emails from a domain:</p>

<p><code>from:*@example.com</code></p>

<p>This matches any sender address that ends with <code>@example.com</code>: noreply@example.com, support@example.com, john.smith@example.com, and so on.</p>

<p>You can use this in any filter creation method:</p>
<ul>
  <li>In the Gmail search bar, then clicking "Create filter."</li>
  <li>In Settings → Filters → Create a new filter, in the From field.</li>
  <li>Through tools like <a href="https://gmailfiltermanager.com">Gmail Filter Manager</a>, which auto-detects the sender domain.</li>
</ul>

<h2>Subdomain Handling</h2>

<p>One of the most common mistakes with domain filters: <code>*@example.com</code> does <strong>not</strong> match subdomains like <code>user@mail.example.com</code> or <code>user@news.example.com</code>.</p>

<p>If a company sends from subdomains, you have a few options:</p>

<h3>Option 1: Filter multiple patterns</h3>
<p>Create a single filter with multiple domain patterns in the From field:</p>
<p><code>*@example.com OR *@mail.example.com OR *@news.example.com</code></p>
<p>This catches all three domains but requires you to know which subdomains the company uses.</p>

<h3>Option 2: Use the "Has the words" field</h3>
<p>Instead of the From field, use the "Has the words" (or "Includes the words") field with this search operator:</p>
<p><code>from:example.com</code></p>
<p>Without the <code>*@</code> prefix, Gmail performs a broader match that often catches subdomains. However, this is less precise — it could also match an address like <code>user@notexample.com</code> if the domain name appears elsewhere in the message headers. In practice, false positives are rare, but it is worth knowing the trade-off.</p>

<h3>Option 3: Use the list: operator for mailing lists</h3>
<p>If the emails come from a mailing list, you can filter using:</p>
<p><code>list:example.com</code></p>
<p>This matches the List-ID header, which is more reliable than the From address for mailing lists and often covers subdomains.</p>

<h2>Common Provider Gotchas</h2>

<p>Some email senders use third-party services to send their messages, which means the "From" domain may not match what you expect.</p>

<h3>Marketing platforms</h3>
<p>Companies using services like Mailchimp, SendGrid, or Constant Contact often send from addresses like <code>bounce-mc.us1.12345@mail234.example.com</code> or even from a completely different domain owned by the email service provider. The "From" address you see might be <code>newsletter@company.com</code>, but the envelope sender (used for bounces) is different.</p>

<p>Gmail filters match on the visible "From" address, so <code>*@company.com</code> usually works. But if it doesn't catch everything, check the full email headers (open an email → three-dot menu → "Show original") to find the actual sending domain.</p>

<h3>Google Workspace domains</h3>
<p>If you are filtering emails from another Google Workspace (formerly G Suite) organization, <code>*@theirdomain.com</code> works reliably because they control their own sending domain.</p>

<h3>Shared hosting domains</h3>
<p>Be careful with domain filters for large shared platforms. For example, filtering <code>*@gmail.com</code> would catch every Gmail user, which is almost certainly not what you want. Domain filters are best suited for company-owned domains where you want to block or sort <em>all</em> mail from that organization.</p>

<h2>Advanced Wildcard Patterns</h2>

<p>Beyond basic domain filtering, Gmail supports some useful patterns:</p>

<h3>Multiple domains in one filter</h3>
<p>Use the <code>OR</code> operator (must be uppercase) to match multiple domains in a single filter:</p>
<p><code>from:*@company-a.com OR from:*@company-b.com OR from:*@company-c.com</code></p>
<p>This is useful when a parent company sends from multiple brand domains.</p>

<h3>Combining domain filter with keyword exclusion</h3>
<p>What if you want to filter most emails from a domain but keep certain important ones? Combine the domain filter with a negative keyword:</p>
<p><strong>From:</strong> <code>*@company.com</code></p>
<p><strong>Doesn't have:</strong> <code>invoice OR payment OR receipt</code></p>
<p>This filter catches all emails from company.com <em>except</em> those containing "invoice," "payment," or "receipt" in the body or subject.</p>

<h3>Plus addressing with wildcards</h3>
<p>If you use Gmail's plus addressing (e.g., <code>yourname+shopping@gmail.com</code>), you can filter based on the "To" address:</p>
<p><strong>To:</strong> <code>yourname+shopping@gmail.com</code></p>
<p>This catches everything sent to that plus address, regardless of who sent it. Combine it with a domain filter for even more precision.</p>

<h2>Practical Use Cases</h2>

<h3>Block all email from a company</h3>
<p>Create a filter with <code>*@company.com</code> and set the action to "Delete it." Apply to existing conversations to clean up retroactively.</p>

<h3>Auto-label emails from a client</h3>
<p>Filter <code>*@client.com</code> and apply a label like "Clients/ClientName." Optionally star them so they stand out in your inbox.</p>

<h3>Sort all social media notifications</h3>
<p>Create one filter for multiple social platforms:</p>
<p><code>from:*@facebookmail.com OR from:*@twitter.com OR from:*@linkedin.com OR from:*@instagram.com</code></p>
<p>Skip the inbox and apply a "Social" label. Check it when you have downtime.</p>

<h3>Archive all internal automated reports</h3>
<p>If your company's automated systems send from a specific subdomain:</p>
<p><code>from:*@reports.yourcompany.com</code></p>
<p>Skip inbox, apply "Reports" label, mark as read.</p>

<h2>Setting Up Domain Filters Quickly</h2>

<p>When you are cleaning up your inbox, you often discover multiple domains you want to filter in a single session. Going through Gmail Settings for each one takes time. <a href="https://gmailfiltermanager.com">Gmail Filter Manager</a> speeds up the process — select emails from a sender, and it automatically identifies the domain and lets you create a filter with your chosen action in a couple of clicks.</p>

<h2>Testing Your Filters</h2>

<p>After creating a wildcard filter, verify it works:</p>

<ol>
  <li>Go to Gmail Settings → Filters and Blocked Addresses.</li>
  <li>Find your new filter and confirm the criteria are correct.</li>
  <li>Search for <code>from:*@domain.com</code> in Gmail to see which existing emails match.</li>
  <li>If you chose "Also apply to existing conversations," verify those messages were moved/labeled/deleted as expected.</li>
</ol>

<p>Domain-level wildcard filters are one of the most useful tools in Gmail's arsenal. One well-crafted filter can eliminate dozens or hundreds of emails per month from your inbox, and once set up, it requires zero ongoing effort. If you are only filtering individual email addresses today, switching to domain-level filters is one of the highest-impact changes you can make to your email workflow.</p>
`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
