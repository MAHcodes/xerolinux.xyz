# <center>.:: XeroLinux Changelog ::.</center>

<br />

Below is a list of changes. Fresh install is no longer needed if you are already on 25/05 ISO, just run the **upall** command and you should be good to go.  


#### - Changelog 16/06/2022 :
<br />

- **KDE Plasma** updated to 5.25.2 (second point release).
- **KDE Frameworks** updated to 5.95 including all packages.
- **Floating Panel** enabled by default. Has been applied to all rices too.
- All included packages updated to latest available as of ISO release/upload.  

#### - Important Changes :
<br />

- **KDE Plasma** 5.25.2 might still have bugs. Report them please ? (*)
- **nVidia-dkms-tkg** Driver Stack used instead of Official.(**)
- **Wayland** Session removed from ISO.(***)

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

That’s it for now.. Hope you enjoy our latest release of
**XeroLinux** ;)
