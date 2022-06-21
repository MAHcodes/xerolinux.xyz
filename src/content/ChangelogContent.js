
        export const html = `
            <div>
            <h1 id="-xerolinux-changelog-"><center>.:: XeroLinux Changelog ::.</center></h1>
<br />

<p>Below is a list of changes. Fresh install is no longer needed if you are already on 25/05 ISO, just run the <strong>upall</strong> command and you should be good to go.</p>

<p>If you on 25/05 release, once updated, to enable new <strong>Floating Panel</strong>, just right click on it "Edit > More Options > Floating".
<br />
</p>
<h4>- Changelog 16/06/2022 :</h4>
<br />
<ul>
<li><strong>KDE Plasma</strong> updated to 5.25.0 initial release expect bugs.(*)</li>
<li><strong>KDE Frameworks</strong> updated to 5.95 including all packages.</li>
<li>New <strong>QT6 Libraries</strong> added and <strong>QT5 Libraries</strong> updated to latest.</li>
<li><strong>Floating Panel</strong> enabled by default. Will be applied to all rices soon.</li>
<li>All included packages updated to latest available as of ISO release/upload.</li>
</ul>
<h4>- Changelog 25/05/2022 :</h4>
<br />
<ul>
<li><strong>Calamares</strong> updated to latest.</li>
<li><strong>YaY</strong> added alongside <strong>Paru</strong> for Y'all.</li>
<li>New revamped tool now called <strong>XeroTool</strong>.</li>
<li>New <strong>XeroLinux XL</strong> Repo for larger packages.</li>
<li>No more <strong>ArcoLinux</strong> Repos. Just ours.</li>
<li><strong>PipeWire</strong> is now the default Audio Server.</li>
<li>Added <strong>nVidia-Prime</strong> Drivers to Calamares.</li>
<li>Default FileSystem selection is now <strong>XFS</strong>.</li>
<li>No more Package Selection In <strong>Calamares</strong>.</li>
<li>New <strong>BTRFS/Snapper</strong> tools in case you use that FS.</li>
<li>New Post Install Package Installer (via tool).</li>
<li>Tweaked <strong>SDDM</strong> Config for Optimus users.</li>
<li><strong>nVidia-dkms-tkg</strong> Driver Stack used instead of Official.(**)</li>
<li>New Button in <strong>Calamares</strong> to follow along during install.</li>
<li>All <strong>GPU</strong> Drivers moved to Calamares no longer on ISO.</li>
<li>Less boot options on <strong>USB Boot</strong>, no more confusion.</li>
<li>New <strong>Rice Switcher</strong> via the new <strong>XeroTool</strong>.</li>
<li>Tons of under-the-hood tweaks &amp; optimizations.</li>
<li>Tweaked the default Rice making it better.</li>
<li>New simple <strong>Grub</strong> theme included.</li>
<li><strong>Wayland</strong> Session removed from ISO.(***)</li>
<li><strong>Snaps</strong> Support removed from <strong>Pamac.</strong></li>
<li><strong>AutoComposer</strong> added for better gaming experience.<br></li>
<li>Added <strong>XeroTool</strong> icon to System Tray for easy access.</li>
</ul>
<details open>
<summary>Notes Please read...</summary>
<p class="bg">
* : Make sure to go over this thread to know more about the current situation with => <a
href="https://forum.xerolinux.xyz/thread-137.html"
target="_blank"
rel="noreferrer"
>
<span> Plasma 5.25 Realease…</span>
</a>.
</p>
<p class="bg">
** : We opted to use the <span>TKG</span> patched versions of the 515 nVidia driver stack. We will stick with those from here on in, as they preform better & are more stable than the Official ones. Available from our new <span>nVidia Repo</span>.
<a
href="https://forum.xerolinux.xyz/thread-124.html"
target="_blank"
rel="noreferrer"
>
<span> nVidia Driver Troubleshooting</span>
</a>
</p>
<p class="bg">
*** : You will be able to add
<span> “Wayland Support” </span>
via the <span> “XeroLinux Tool” </span>. Only recommended if you are using
<span>AMD GPU</span>. If you are on <span>nVidia</span> I would recommend you wait
for support to get better...</p>
</details>

<p>That’s it for now.. Hope you enjoy our latest release of
<strong>XeroLinux</strong> ;)</p>

            </div>
        `
    
